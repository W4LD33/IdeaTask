const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(cors({
    origin: 'https://test16478.bubbleapps.io'
  }));
  


app.get('/removeLetter/:word/:letter', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
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