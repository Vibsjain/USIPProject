const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        default: "#000000"
    },
    places: {
        type: Array
    }
})

module.exports = mongoose.model("Link", LinkSchema);