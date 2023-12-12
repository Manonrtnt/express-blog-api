const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
        },
        slug: {
            type: String,
            required: [true, 'Please add a slug'],
        },
        content: {
            type: String,
            required: [true, 'Please add content'],
        },
        cover: {
            type: String,
            required: [true, 'Please add a cover image'],
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
        categorie_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category', // Assurez-vous d'avoir un modèle Category défini
            required: [true, 'Please add a category ID'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Article', articleSchema);