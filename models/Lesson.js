const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true, unique: false},
    lesson: {type: String, required: true, unique: false},
    lessonDescription: {type: String, required: true, unique: false}
})

module.exports = model('Lesson', schema)