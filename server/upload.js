
const multer = require('multer');

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb('C:\Users\Taufique Shaikh\Documents', 'uploads/'); // Specify the directory where files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Add timestamp to filename to avoid conflicts
  },
});

// Create an instance of multer middleware
const upload = multer({ storage: storage });

module.exports = upload;