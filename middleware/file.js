const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb){
      if (file.fieldname === "bookFile") {
        cb(null, "public/books");
        } else {
        cb(null, "public/covers");
        }
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

module.exports = multer({storage})