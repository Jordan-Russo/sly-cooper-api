const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const characters = require(__dirname + "/characters.js")
app.use(cors())
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.get('/css/style.css', (req, res) => {
  res.sendFile(__dirname + '/css/style.css')
})
app.get('/img/slycooperbackground.png', (req, res) => {
  res.sendFile(__dirname + '/img/slycooperbackground.png')
})
app.get('/api/all', (req, res) => {
  res.json(characters)
  console.log('all')
})
app.get('/api/random', (req, res) => {
  const charNames = Object.keys(characters)
  const randomChar = charNames[Math.floor(Math.random() * (charNames.length - 1))]
  res.json(characters[randomChar])
  console.log(randomChar)
})
app.get('/api/:name', (req, res) => {
  const charName = req.params.name.trim().toLowerCase()
  res.json(characters[charName] || characters['unknown'])
  console.log(charName)
})
app.listen(process.env.PORT || PORT, () => {
  console.log(`We have opened the ports, get ready to set sail for an amazing adventure on port#: ${PORT}!`)
})