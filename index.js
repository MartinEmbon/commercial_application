const express = require("express")
const app = express()
const UserRoute = require("./routes/users")

var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",UserRoute)

app.listen(3000,()=>{
    console.log("running on 3000")
})