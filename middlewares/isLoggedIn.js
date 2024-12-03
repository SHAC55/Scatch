const jwt = require('jsonwebtoken')
const userModel = require('../models/user-model')

module.exports = async function(req,res,next){
    if(!req.cookies.token){
        req.flash("error" , "you need to login")
        return res.redirect("/")
    }
}