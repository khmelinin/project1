const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    id: {type: Number, required: false, unique:true},
    userId: {type: Number, required: true, unique: false},
    managerId: {type: Number, required: true, unique: false},
    mark: {type: Number, required: true, unique: false}
})

module.exports = model('Attestation', schema)