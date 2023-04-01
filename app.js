const express = require('express')
const app = express()

app.get('/removeLetter/:word/:letter', (req, res) => {
  const word = req.params.word
  const letter = req.params.letter
  const regex = new RegExp(letter, 'gi')
  const newWord = word.replace(regex, '')
  res.send(newWord)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})