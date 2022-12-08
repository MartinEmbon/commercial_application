var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")

router.get("/",userController.index)
router.post("/",userController.email)

module.exports = router