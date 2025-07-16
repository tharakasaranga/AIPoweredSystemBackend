const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    text: String,
    completed: { type: Boolean, default: false }
}, { timestamps: true });
module.exports = mongoose.model('Task', taskSchema);