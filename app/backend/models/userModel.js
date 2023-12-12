const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please add a username'],
        },
        avatar: {
            type: String,
            required: [true, 'Please add an avatar'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
        },
        email_verified_at: {
            type: Date,
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
        },
        remember_token: {
            type: String,
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
        roles_id: {
            type: Number,
            required: [true, 'Please add a role ID'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);