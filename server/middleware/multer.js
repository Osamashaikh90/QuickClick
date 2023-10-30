const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "nono",
      resource_type: "auto",
      allowedFormats: ["jpeg", "png", "jpg", "mp3", "mp4", "mov"],
      transformation: [{ width: 500, height: 500, crop: "fill" }],
      path: file.path,
    };
  },
});

// console.log(storage.cloudinary.url)

const upload = multer({ storage });

module.exports = upload;
