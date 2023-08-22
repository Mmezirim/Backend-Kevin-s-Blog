const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const devSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body: mongoose.Schema.Types.Mixed,
    image: {
        type: String,
        required: true
    },
    hashtags: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    author: {
        type: String,
        required: true
    },readMins: {
        type: String,
        required: true
    },categories: {
        type: String,
        required: true
    },

    comments:[
        {
            commenter: String,
            text: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model('Blog', devSchema);

module.exports = Blog;