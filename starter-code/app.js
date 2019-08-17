const express = require('express');
const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/views/home.html`)
})

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/public/views/about.html`)
})

app.get('/gallery', (req, res) => {
  res.sendFile(`${__dirname}/public/views/gallery.html`)
})

app.listen(3000)