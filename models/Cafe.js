const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: {type: Number, required: false, unique:true},
    title: {type: String, required: true, unique: false},
    address: {type: String, required: true, unique: false}
})

module.exports = model('Cafe', schema)