import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" // set and access user's cookies

const app = express()

app.use(cors({ // 'use' method to mount middleware functions(middleware functions have access to request obj, response obj and next middleware function)
    origin: process.env.CORS_ORIGIN,// set the origin of the requests
    credentials: true
}))

app.use(express.urlencoded({extended: true, limit: "16kb"})) // SAMAJH NHI AAYA
app.use(express.static("public")) // serve static files(e.g. images) from specified directory (public here).
//e.g. http://yourdomain.com/logo.png where 'logo.png' is in public folder
app.use(express.json({limit: "16kb"})) // if the incoming JSON payload exceeds 16 kb, the middleware will reject it, and the request will not be parsed.

app.use(cookieParser()) //access user's cookies

export {app}