const express = require('express')
const cors = require('cors')
const { routes } = require('./src/routes') 

const PORT = process.env.PORT || 5000;

const app = express()
const { json, urlencoded } = express

const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))
app.use(json())
app.use(urlencoded({ extended: false }))

app.use(routes)

app.listen(PORT, () => { 
    console.log(`App listening ${PORT}`) 
})

// module.exports = server