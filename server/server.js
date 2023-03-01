const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

// as long as express.static is in place, these two are not needed as endpoints. 
// it is more proffesional to have them in place to make your url look cleaner.
app.get('/css', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
})

app.get('/js', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/main.js'))
})





app.listen(4000, console.log(`App running on port 4000!`))