const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

const PORT = config.get('port') || 5000

async function start()
{
    try
    {
        await mongoose.connect(config.get('mongoUri'),
            {
                
            }
        )
    }
    catch (e)
    {
        console.log('Server Error: ', e.message)
        process.exit(1)
    }
}

start()

app.listen(5000, ()=> console.log(`App has benn started on port ${PORT}`))