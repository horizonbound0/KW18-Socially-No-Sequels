const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {

        // username - string, required, trimmed, unique
        username: { type: String, required: true },

        // email - string, required, unique, must match a valid email address?
        email: { type: String, required: true },

        // thoughts - array of _id values referencing the Thought model
        thoughts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],

        // friends - Array of _id values referencing the User model (self-reference)
        friends: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
            },
        ],

        // virtual called friendCount that retrieves length of friernds on query

    }
)
const User = mongoose.model('user', userSchema);

module.exports = User;