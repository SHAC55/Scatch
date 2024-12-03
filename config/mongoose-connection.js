const mongoose = require("mongoose")
const dbgr = require("debug")("development:mongoose")
const config = require("config")
mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    dbgr("connected")
})
.catch(function(error){
    dbgr(error)
})

module.exports = mongoose.connection