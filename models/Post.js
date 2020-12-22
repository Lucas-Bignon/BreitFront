const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const appDir = path.dirname(require.main.filename);
const p = path.join(appDir, 'data', 'product.json');
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

 
module.exports = mongoose.model('Posts', PostSchema);