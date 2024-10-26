require("dotenv").config()

module.exports ={
    development:{
        username: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        logging: false,
        timezone:"+07:00",


    },
    production:{
        username: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        logging: false,
        timezone:"+07:00",
        dialectOptins: {
            ssl:{
                require:true,
                rejectUnauthorized:false,
            }
        }

    }
}