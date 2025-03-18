const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://booking:booking@cluster0.ogxwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(console.log("connected to database"))
  .catch((e) => {
    console.log("Error", e);
  });
module.exports = mongoose;