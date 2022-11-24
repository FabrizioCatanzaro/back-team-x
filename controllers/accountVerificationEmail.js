const { createTransport } = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { GOOGLE_ID,GOOGLE_REFRESH,GOOGLE_SECRET,GOOGLE_URL,GOOGLE_USER, BACK_URL } = process.env

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
        <div style="background-color: black; border-radius: 1.5rem; padding: 1.5rem; border-style: groove; width: 70%; height:100%; text-align:center">
            <h1 style= "font-size:2rem; font-style:oblique; font-family: Georgia, 'Times New Roman', Times, serif; color:white; text-align:center; text-decoration: none">¡Hello ${name}!</h1>
            <p style="font-size: 1.2rem; text-align:center; font-family: Tahoma, Geneva, Verdana, sans-serif; color: white">We're glad you are interested in joining to our Website. But first of all, we have to check your email account</p>        
            <p style="text-align:center; color: white; font-size: 1.4rem">Please, <a href="${host}auth/verify/${code}" style="font-size: 1.4rem;  color: #1155CC; text-align:center; text-decoration: none; font-weight: bold; text-shadow: 0 0 3px #FF0000">click here</a> to verify your account in My Tinerary.</p>
        </div>
    `
}

const accountVerificationEmail = async (mailDelNuevoUsuario,codigoCalculadoConCrypto, nombreDelUsuario) => {
    const client = createClient() 
    client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH }) 
    const transport = getTransport(client) 
    const mailOptions = { 
        from: GOOGLE_USER, 
        to: mailDelNuevoUsuario, 
        subject: 'Verify your new account in My Tinerary', 
        html: getEmailBody({ name:nombreDelUsuario, code:codigoCalculadoConCrypto, host:BACK_URL }) 
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