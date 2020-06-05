const express = require('express')
const app = express()
const { getMovies, createMovies } = require('./controller')
app.use(express.json())

app.get('/api/v1/getMovies', getMovies)
app.post('/api/v1/createMovies', createMovies)
app.get('*', (req, res) => {
    res.status(404).send("Error 404 Not Found");
    res.end();
})
const port = process.env.POORT || 80
app.listen(port, function () {
    console.log("Server Listening at " + port)
})