const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    due_date : {
        type: Date,
        required: true
    },
    completed : {
        type: Boolean,
    },
    tagColor : {
        type: String,
    }
})

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;