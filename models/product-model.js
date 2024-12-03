const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image : String ,
    name : String ,
    price : String ,
    discount : {
        type : Number ,
        default : 0
    },
    bgcolor : String ,
    panelcolor : String ,
    textcolr : String
})

module.exports = mongoose.model("Product" , productSchema)