// Importing express library and creating express application
const express = require('express')
const app = express()

// Importing cors library and adding cors middleware to the application
const cors = require('cors')
app.use(cors())

app.get('/removeLetter/:word/:letter', (req, res) => {
    const word = req.params.word
    const letter = req.params.letter
    // Matching all cases of letter globally and case insensitive
    const regex = new RegExp(letter, 'gi')
    const newWord = word.replace(regex, '')
    res.send(newWord)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
