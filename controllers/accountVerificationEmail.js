const { createTransport } = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,GOOGLE_USER,BACK_URL } = process.env

function createClient() {
    return new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
}

function getTransport(client) { 
    const accessToken = client.getAccessToken()
    return createTransport({
        service: 'gmail',  
        auth: {             
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { rejectUnauthorized: false }
    })
}


function getEmailBody({code,host,name}) {
    return `
    <div
        style="background-image: url(https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80); background-size: cover;
        background-position: center; background-color: rgb(45, 45, 45); background-blend-mode: multiply;border-radius: 1.5rem; padding: 1.5rem; border-style: groove; width: 70%; height:18rem; text-align:center; justify-content: space-between;">
        <h1
            style="font-size:2rem; font-style:oblique; font-family: Georgia, 'Times New Roman', Times, serif; color:white; text-align:center; text-decoration: none">
            ¡Hello ${name}!</h1>
        <p style="font-size: 1.2rem; text-align:center; font-family: Tahoma, Geneva, Verdana, sans-serif; color: white">
            We're glad you are interested in joining to our Website. But first of all, we have to check your email
            account</p>
        <p style="text-align:center; color: white; font-size: 1.2rem; font-family: Tahoma, Geneva, Verdana, sans-serif">Please, click the button below to verify your account in My Tinerary :D</p>
        <div><a href="${host}api/auth/verify/${code}" style="background-color: white; padding: .6rem 2.6rem; font-size: 1.5rem;font-family: Tahoma; text-decoration: none; color: black; border-radius: 20px;">VERIFY MY ACCOUNT</a></div>
    </div>
    `
}

const accountVerificationEmail = async (newUserMail,codeWithCrypto, userName) => {
    const client = createClient() 
    client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH }) 
    const transport = getTransport(client) 
    const mailOptions = { 
        from: GOOGLE_USER, 
        to: newUserMail, 
        subject: 'Verify your new account in My Tinerary', 
        html: getEmailBody({ name:userName, code:codeWithCrypto, host:BACK_URL }) 
    }
    await transport.sendMail( 
        mailOptions, 
        (error, response) => {
            if (error) {
                console.error(error)
                return
            }
            console.log('Email sent!')
        }
    )
}

module.exports = accountVerificationEmail