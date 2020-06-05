const movieModel = require('./model')
const validator = require('validator')
const getMovies = async (req, res) => {
    let movies = await movieModel.find()
    res.status(200).json({
        status: "Found",
        result: movies
    })
}

const createMovies = async (req, res) => {
    try {
        let data = req.body
        if (!data.name || !data.summary || !data.img) {
            res.status(400).json({
                status: "Invalid Body"
            })
            return
        }
        // console.log(validator.isURL(data.url, { protocols: ['http', 'https', 'ftp'], require_protocol: false, require_host: true, require_valid_protocol: true }))
        let result = await movieModel.create(data)
        res.status(201).json({
            status: "Created",
            result: result
        })
    } catch (err) {
        res.status(400).json({
            status: "Erro Occured"
        })
    }
}
module.exports = { getMovies, createMovies }