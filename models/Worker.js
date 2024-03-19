const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: {type: Number, required: false, unique:true},
    userId: {type: Number, required: true, unique: false},
    title: {type: String, required: true, unique: false},
    cafeId: {type: Number, required: true, unique: false},
    roleTitle: {type: String, required: true, unique: false},
    salary: {type: Number, required: true, unique: false}
})

module.exports = model('Worker', schema)