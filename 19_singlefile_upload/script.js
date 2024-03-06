let path = require("path");
let express = require("express");

let app = express();
let PORT = 8000;

app.set("view engine", "ejs");
app.set("view", path.resolve("./views"));

app.use(express.json());

app.get("/",(req,res)=>{
    return res.render("homepage");
});

app.listen(PORT, () => console.log('server started at PORT:8000'))