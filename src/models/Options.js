const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OptionsSchema = new Schema({
    _id: String,
    sex: [String],
    month: [String],
    tribe: [String]
});


const Options = mongoose.model('Options', OptionsSchema);

module.exports = Options;
