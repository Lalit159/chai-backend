import multer from "multer" // handle file uploading easily

const storage = multer.diskStorage({ // There are some other storages too
    // define destination name
    destination: function(req,file,cb){ // cb: callback -> called when destination is determined(cb is a typical node.js function)
        cb(null, "./public/temp") // null emplies "no error", other thing is the destination directory
        //Basically the file will be stored at ""./public/temp"
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
})

module.exports = upload // default export
module.exports = {upload} // named export