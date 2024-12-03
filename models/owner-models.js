const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/scatch")

const ownerSchema = mongoose.Schema({
    fullname : String ,
    email : String ,
    password : String ,
    products : Number ,
    picture : String ,
    gstin : String
})

module.exports = mongoose.model("Owner" , ownerSchema)