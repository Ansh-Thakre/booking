const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())

require("./config/databaseconnet.js");
const router = require("./routes/route.js");

app.use("/", router);
// app.use("/",(req,res)=> res.send({status : 200 , success:true}))

const port =8081;

app.listen(port,()=>{
    console.log("server is listning to port 8081");
})

