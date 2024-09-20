const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {

        // username - string, required, trimmed, unique

        // email - string, required, unique, must match a valid email address?

        // thoughts - array of _id values referencing the Thought model

        // friends - Array of _id values referencing the User model (self-reference)

        // virtual called friendCount that retrieves length of friernds on query

    }
)
const User = model('user', userSchema);

module.exports = User;