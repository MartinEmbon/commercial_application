var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")

const multer = require("multer");
const fs = require("fs")

const Storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./public");
    },
    filename: function (req, file, callback) {
      callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
  });

/** usando configuração como storage do multer */
const attachmentUpload = multer({
    storage: Storage,
  }).single("attachment");
  
router.get("/",  userController.index)
router.post("/", attachmentUpload,userController.email)

module.exports = router
