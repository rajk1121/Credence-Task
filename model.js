const mongoose = require('mongoose')
const validator = require('validator')
const DB =  'mongodb+srv://rajk1121:Rajat1121@cluster0-chamy.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(DB, {
    useNewUrlParser: true
}).then(conn => {
    console.log('Connnected to DataBase');
});
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        validate: function (val) {
            if (!validator.isURL(val, { protocols: ['http', 'https', 'ftp'], require_protocol: false, require_host: true, require_valid_protocol: true })) {
                throw new Error("Invalid URL")
            }
        },
        required: true
    },
    summary: {
        type: String,
        required: true
    }
})
const movieModel = mongoose.model('credence_movieModel', movieSchema)
module.exports = movieModel