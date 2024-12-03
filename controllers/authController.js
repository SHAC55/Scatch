const usermodel = require("../models/user-model");
const jwt = require('jsonwebtoken');
const { generateToken } = require("../utils/ganerateToken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");

module.exports.registerUser =  async function(req, res) {
    try {
        let { fullname, password, email } = req.body;

        let customer = await usermodel.findOne({email:email})
        if (customer) return res.status(401).send("User already exsist")
        

        // Hash the password before saving to the database
        const salt = await bcrypt.genSalt(10); // Wait for the salt to be generated
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

        // Create the user with the hashed password
        let user = await usermodel.create({
            fullname,
            password: hashedPassword, // Use the hashed password
            email
        });

        let token = generateToken(user)

        // Send the token back to the client
        res.status(201).send({ message: "User registered successfully"});
        res.cookie("token", token)

    } catch (error) {
        res.status(500).send({ error: error.message }); // Send a more informative error response
    }
}

module.exports.loginUser = async function(req , res){
    let { email , password } = req.body ;
    
    let user = await userModel.findOne({ email })
    if(!user) return res.send("Email or password incorrect")

        bcrypt.compare(password , user.password , function(err, result){
            if(result){
                let token = generateToken(user)
                res.cookie("token",token)
                res.send("You are logged in")
            }
            else{
                res.send("Email or password incorrect")
            }
        })
}