var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
var multer = require("multer")
var upload = multer()

router.get("/",  userController.index)
router.post("/", upload.any(),userController.email)
//router.post("/",userController.uploadFile, userController.email)

module.exports = router
