require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Listen port at:', PORT);
})