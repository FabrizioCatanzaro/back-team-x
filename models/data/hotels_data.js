let hotels = [
    {
        name: "Hotel NH Buenos Aires City", 
        photo: [
            'https://upload.wikimedia.org/wikipedia/commons/a/a9/NH_City_Hotel.JPG',
            'https://cf.bstatic.com/xdata/images/hotel/max500/267759868.jpg?k=7775ea65be4485bf5dfe96f69b4b4f8eb6c2fe796f94265e8990467f220e64c8&o=&hp=1',
            'https://pix10.agoda.net/hotelImages/4347198/0/f01dd5d532f3934a3c173db285944303.jpg?ca=9&ce=1&s=1024x768',
        ],
        capacity: 45000,
        description:"This luxury hotel is housed in a 1930s art deco building, a 1-minute walk from the nearest bus stop, a 5-minute walk from the Casa Rosada and 2 km from the live performances at the Teatro Colón.",
        citiId: "636eb11ccc137ffd592c01a8",
        userId:"6372d48e597d27b935de7569",
    },
    {
        name: "Hotel Brisa Barra",
        photo: [
            'https://rialehoteis.com.br/wp-content/uploads/2022/01/brisa_barra-_029.jpg',
            'https://novo-hu.s3.amazonaws.com/reservas/ota/prod/hotel/2830/brisa-barra-hotel-001_20200521164516.jpg',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/72482832.jpg?k=a6383f9e4177fd0660fbfe9dbebeed4cf2456dc30f24e7a4f8bba309e6ff5106&o=&hp=1',
        ],
        capacity: 62000,
        description:"Brisa Barra Hotel has swimming pools for adults and children and is located in front of Barra da Tijuca Beach. It includes a gym, restaurant and dry and steam sauna.",
        citiId: "636eb11ccc137ffd592c01a9",
        userId:"6372d48e597d27b935de7568",
    },
    {
        name: "Hotel El Palace Barcelona", 
        photo: [
            'https://static.hoteltreats.com/site/styles/microsite_hero/s3/2021-02/fachada-Hotel-El-Palace-Barcelona-compress-image.jpg?h=277ddade&itok=uxr2cRjv',
            'https://content.r9cdn.net/rimg/himg/0d/48/67/leonardo-67125971-Terraza_El_Palace_Barcelona2_O-659085.jpg?crop=true&width=500&height=350',
            'https://static-new.lhw.com/HotelImages/Final/LW1401/lw1401_143117412_790x490.jpg',
        ],
        capacity: 39000,
        description:"Get ready to live a unique experience in one of the most special and exclusive hotels in all of Barcelona. Art&Drinks, at the Hotel El Palace in Barcelona, offers you the opportunity to attend a beautiful illustration workshop",
        citiId: "636eb11ccc137ffd592c01aa",
        userId:"6372d48e597d27b935de7569",
    },
    {
        name: "Hotel Hampton by Hilton Istanbul Arnavutkoy",
        photo: [
            'https://www.bilginconsulting.com/wp-content/uploads/2020/12/Screen-Shot-2020-11-20-at-10.36.10-1170x650.png',
            'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_360,q_auto,w_360/itemimages/58/05/5805434_v3.jpeg',
            'https://images.trvl-media.com/hotels/84000000/83520000/83515300/83515300/w5604h2994x0y0-845609e7.jpg?impolicy=resizecrop&rw=670&ra=fit',
        ],
        capacity:5000,
        description:"We're located 10 kilometers from Istanbul Airport and 30 minutes from the Mall of Istanbul with its shops, restaurants, and cinema. Vialand Theme Park is a 35-minute drive",
        citiId: "636e5fab4931696280c0dad0",
        userId:"6372d48e597d27b935de7568",
    }
    ,{
        name: "Hotel Hollander - Downtown St. Petersburg",
        photo: [
            'https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/f/196037_1488032547.jpg?0',
            'https://images.squarespace-cdn.com/content/v1/588e85e046c3c4023d8bbbc3/1610733548618-Y522LWZIVGP54FDP27FE/POOLSIDE+2.jpeg?format=1000w',
            'https://images.squarespace-cdn.com/content/v1/588e85e046c3c4023d8bbbc3/1610735514250-DVM9O1AL7BKDMQGOIZFJ/Fireplace.jpeg',
        ],
        capacity: 43000,
        description:"Located in the center of Saint Petersburg, this boutique hotel offers free Wi-Fi, a restaurant and a heated outdoor pool with a bar. The Dalí Museum is 1.6 km away.",
        citiId: "636eb11ccc137ffd592c01ac",
        userId:"6372d48e597d27b935de7569",
    }
    ,{

        name: "Casino Wharf • Pyrmont, NSW",
        photo: [
            'https://www.architectureanddesign.com.au/getmedia/ebb3905a-6106-43e8-9b03-4c6667e7eda2/101203complete480.aspx?&ext=.jpg',
            'https://static.ffx.io/images/$zoom_0.321%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_1/t_crop_custom/q_86%2Cf_auto/834d25b2dbbb11b45e4787b162ee650a6c813a28',
            'https://c8.alamy.com/comp/MB8JD8/pyrmont-casino-ferry-wharf-pyrmont-new-south-wales-australia-MB8JD8.jpg',
        ],
        capacity: 75000,
        description:"Star City Casino Wharf is located West of the Sydney Harbour Bridge just on Pyrmont Bay.",
        citiId: "636eb11ccc137ffd592c01ad",
        userId:"6372d48e597d27b935de7568",
    },
    {

        name: "Hotel Kadoya - Tokio",
        photo: [
            'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/10/28/1028662_v3.jpeg',
            'https://www.kayak.es/rimg/himg/8e/7a/e6/expediav2-660192-e53983-756429.jpg?width=1366&height=768&crop=true',
            'https://cf.bstatic.com/xdata/images/hotel/max500/253186821.jpg?k=3b3015e1338b107a19a46c94ec16f982ea7744275f2bfcf1e952d4584027b125&o=&hp=1',
        ],
        capacity: 80000,
        description:"Located in a lively area filled with shops and restaurants, this low-key hotel is a 5-minute walk from Shinjuku Train Station, 2 km from Shinjuku Gyoen National Garden and Meiji Jingu, a Shinto shrine.",
        citiId: "636eb11ccc137ffd592c01ae",
        userId:"6372d48e597d27b935de756b",
    },
    {

        name: "Hotel Sheraton Mall of the Emirates, Dubai",
        photo: [
            'https://www.mydubai.com.au/wp-content/uploads/sites/23/2018/07/sheraton-dubai-mall-of-the-emirates-1.jpg',
            'https://assets.cntraveller.in/photos/60b9fb65db1b6a2d639cf065/4:3/w_1024,h_768,c_limit/Sheraton-Dubai-Mall-of-the-Emirates-Hotel-1297089966-1366x768.jpg',
            'https://www.malloftheemirates.com/images/default-source/default-album/vantage-terrace-800x600.jpg?sfvrsn=bd5c496f_8',
        ],
        capacity: 90000,
        description:"El Sheraton Mall of the Emirates Hotel, Dubai comunica directamente con el centro comercial Mall of the Emirates y está a 20 minutos en auto del aeropuerto internacional DXB y de la Expo 2020.",
        citiId: "636eb11ccc137ffd592c01af",
        userId:"6372d48e597d27b935de756b",
    },
    {
        name: "Hotel The Theatre at Ace",
        photo: [
            'https://d3emaq2p21aram.cloudfront.net/media/cache/venue_carousel/uploads/2017/03/the-theatre-at-ace-hotel-15.jpg',
            'https://www.historictheatrephotos.com/Resources/Theatre-Photos/Theatre-At-Ace-Hotel-Los-Angeles/Photos/Auditorium/Balcony_from_right.JPG',
            'https://media.timeout.com/images/101692405/image.jpg',
        ],
        capacity: 53000,
        description:"Our loving reanimation of the former flagship movie house of United Artists, The Theatre serves Los Angeles' ",
        citiId: "636eb11ccc137ffd592c01b0",
        userId:"6372d48e597d27b935de756b",
    },
    {
    
        name: "Hotel Radisson Blu, Nairobi Upper Hill",
        photo: [
            'https://images.trvl-media.com/lodging/13000000/12010000/12009800/12009760/261519ca.jpg?impolicy=resizecrop&rw=670&ra=fit',
            'https://media.radissonhotels.net/image/radisson-blu-hotel-nairobi-upper-hill/reception/16256-114178-f62751494_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610',
            'https://media.radissonhotels.net/image/radisson-blu-hotel-nairobi-upper-hill/restaurant/16256-114178-f62751484_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610',
        ],
        capacity: 41000,
        description:"This contemporary and luxurious hotel is located in the commercial district, 4.8 km from the Nairobi Arboretum and 17 km from the Nairobi National Park.",
        citiId: "636eb11ccc137ffd592c01b1",
        userId:"6372d48e597d27b935de756a",
    },
    {
    
        name: "Hotel Sheraton Charles de Gaulle, Ad Doqi A.Dokki",
        photo: [
            'https://cache.marriott.com/content/dam/marriott-renditions/PARSI/parsi-aerial-view-0233-hor-feat.jpg',
            'https://pix10.agoda.net/hotelImages/993/99347/99347_17102505500058277650.jpg?ca=6&ce=1&s=1024x768',
            'https://www.hilton.com/im/en/CDGHITW/13858424/00-atrium-view.jpg?impolicy=crop&cw=4499&ch=2401&gravity=NorthWest&xposition=0&yposition=299&rw=800&rh=427',
        ],
        capacity: 28000,
        description:"The Cairo International Conference Centre ( CICC ) is the only comprehensive conference centre in the country.",
        citiId: "636eb11ccc137ffd592c01b2",
        userId:"6372d48e597d27b935de756a",
    },
    {
    
        name: "Hotel Papillo Roma",
        photo: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/24317764.jpg?k=21fc01eca1b6e1759b8775c58fc96346326ae9a638b9452423fc60796445cc62&o=&hp=1',
            'https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/503/2019/01/10101241/hotel_papillo_slide_01.jpg',
            'https://static11.com-hotel.com/uploads/hotel/320213/photo/papillo-hotels-resorts-roma_15988521815.jpg',
        ],
        capacity: 32000,
        description:"This hotel is located just off the Grande Raccordo Anulare ring road, 16 km from central monuments such as the Trevi Fountain and the Pantheon.",
        citiId: "636eb11ccc137ffd592c01b3",
        userId:"6372d48e597d27b935de756a",
    }
]

require ('dotenv').config()
require ('../../config/database/database')

const model_hotel = require('../Model_Hotel')


hotels.forEach((element)=>{
    model_hotel.create({
        name:element.name,
        photo:element.photo,
        capacity:element.capacity,
        description:element.description,
        citiId:element.citiId,
        userId:element.userId,
    })
})



module.exports = model_hotel