const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema(
    {

        // thoughtText - string, required, between 1 - 280 characters

        // createdAt - date, default to current, use getter method to format timestamp on query

        // username (author) - string, required

        // reactions (replies) - array of nested documents created with reactionSchema
        // reactions: [reactionSchema],

        // Virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

    },
    {
        toJSON: {
            getters: true,
        },
    },
);

const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;