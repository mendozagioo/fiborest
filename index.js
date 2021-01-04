const express = require('express')
const { fibonacci } = require('./fibonacci')
const app = express()
const port = 3000

app.use(express.json())

app.get('/fibonacci', (req, res) => {
  const position = req.query.position

  if(req.query === {} || position === undefined) {
    res.send({
      response: "error",
      result: "You need to pass a number with parameter 'position'"
    })
  } else if (isNaN(position)) {
    res.send({
      response: "error",
      result: "You need to pass a number"
    })
  } else {
    res.send({
      response: "OK",
      result: fibonacci(position)
    })
  }
})

// All another endpoint is not available yet
app.get('/*', (res) => {
  res.send("404 NOT FOUND")
})

app.listen(port, () => {
  console.log(`Server listening on: localhost:${port}`)
})

module.exports = app