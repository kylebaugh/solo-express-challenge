const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const ctrl = require('./controller')

app.get('/people/:sortBy', ctrl.getPeople)
app.get('/planets', ctrl.getPlanets)

const port = process.env.PORT || 4567

app.listen(port, () => {
    console.log(`Server connected on port ${port}`)
})
