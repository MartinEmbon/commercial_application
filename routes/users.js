var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
var multer = require("multer")
const upload = multer({ dest: 'controllers/uploads/' })

router.get("/",  userController.index)
router.post("/",upload.single('file'),userController.email)
//router.post("/",userController.uploadFile, userController.email)

module.exports = router
