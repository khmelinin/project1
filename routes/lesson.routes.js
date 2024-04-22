const {Router} = require('express')
const config = require('config')
const shortid = require('shortid')
const Lesson = require('../models/Lesson')
const {validationResult} = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post(
    '/createlesson', async (req, res) => {
    try{
        console.log('Body: ', req.body)
        const {title, lesson, description} = req.body
        const lesson1 = new Lesson({
            title, lesson, description
        })

        await lesson1.save()
        res.status(201).json({message: 'Урок создан'})

    }
    catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, повторите'})
    }
})



router.get('/:id', async(req, res) => {
    try{
        const lesson = await Lesson.findById(req.params.id)
        res.json(lesson)
    }
    catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, повторите'})
    }
})

module.exports = router