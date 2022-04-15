const express = require('express')
//separate app from server for testing
const app = require('./src/app')
const port = 3000


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
