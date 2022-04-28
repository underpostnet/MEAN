const fs = require('fs');

const multer = require('multer');

const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    let ext = file.originalname.split('.').pop();
    cb(null, uuidv4() + '.' + ext);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/gif'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Formato de archivo no valido'));
    }
  },
}).single('fotoPersonal');

module.exports = upload;
