const { Schema, model } = require('mongoose')

const PhonesSchema = new Schema (
    [
        {
            id: Number,
            name: String,
            manufacturer: String,
            description: String,
            color: String,
            price: Number,
            imageFileName: String,
            screen: String,
            processor: String,
            ram: Number
        }
    ]

);

const Phones = model("Phones", PhonesSchema);

module.exports = Phones;