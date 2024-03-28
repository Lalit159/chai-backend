import mongoose, {Schema} from 'mongoose';
import { jwt } from 'jsonwebtoken';
import bcrypt from "bcrypt"




const UserSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, // remove leading and trailing whitespaces
            index: true // Make username searchable in an optimised way 
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname:{
            type: String,
            required: true,
            trim: true,
            index: true 
        },
        avatar:{
            type: String, // cloudinary url
            required: true,

        },
        coverImage:{
            type: String, // cloudinary url
        },
        watchHistory:[
            {
            type: Schema.Types.ObjectId,
            ref: "Video"
            }
        ],
        password:{
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()

}) // don't use arrow function, we can't use 'this' in arrow functions

UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password) // bcrypt.compare(password_to_compare, hashed_password)
}

// JWT token can be sent to the client, typically as part of an HTTP response.

UserSchema.methods.generateAccessToken = function(){
    return jwt.sign(  // jwt.sign(payload: object, secretKey: string, {expiresIn: })
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

UserSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: process.env.TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", UserSchema)