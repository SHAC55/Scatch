const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: Array,
    isadmin: {
        type: Boolean,
        default: false  // Set default value to false
    },
    orders: Array,
    contact: Number,
    pictures: String,
});

module.exports = mongoose.model("User", userSchema);
