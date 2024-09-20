const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {

        // reactionId - Mongoose's ObjectId data type, default to a new ObjectId

        // reactionBody - string, required, 280 character max

        // username - string, required

        // createdAt - Date, set default value to the current timestamp, use getter to format the timestamp on query

        // this is a subdocument schema in the thought model

    },
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;