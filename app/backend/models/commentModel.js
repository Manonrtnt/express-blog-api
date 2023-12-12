const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, 'Please add content'],
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
        updated_at: {
            type: Date,
            default: Date.now,
        },
        deleted_at: {
            type: Date,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please add a user ID'],
        },
        article: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Article',
            required: [true, 'Please add an article ID'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Comment', commentSchema);