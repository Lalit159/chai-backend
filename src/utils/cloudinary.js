import {v2 as cloudinary} from 'cloudinary'; // importing cloudinary SDK
import fs from "fs"
          
cloudinary.config({ // configures the Cloudinary SDK to authenticate requests.
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null

        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" //automatically detect type of file
        })
        console.log("File has been uploaded successfully on cloudinary ", response.url)
        return response
    }
    catch(err){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed. Although, not a great strategy I feel
    }
}

export {uploadOnCloudinary}