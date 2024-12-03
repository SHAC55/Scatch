const express = require("express")
const router = express.Router()
const ownerModel = require("../models/owner-models")
const ownerModels = require("../models/owner-models")

router.get("/" , function(req,res){
    res.send("owner")
})

if(process.env.NODE_ENV === "development"){
router.post("/create" , async function(req,res){
    let owner = await ownerModel.find()
    if (owner.length > 0) {
        return res
        .status(504)
        .send("Owner already exsist")
    } else {
        let {fullname , email, password} = req.body ;
        let admin = ({
            fullname,
            email,
            password
        })
        res.status(201)
        .send(admin)
    }

})
}

module.exports = router ;
