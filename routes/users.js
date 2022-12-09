var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
//const fileUploadController= require('../upload-middleware')

router.get("/",  userController.index)
router.post("/", userController.email)
//router.post("/",userController.uploadFile, userController.email)

module.exports = router
