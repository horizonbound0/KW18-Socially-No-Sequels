
// thoughtText - string, required, between 1 - 280 characters

// createdAt - date, default to current, use getter method to format timestamp on query

// username (author) - string, required

// reactions (replies) - array of nested documents created with reactionSchema

// Virtual called reactionCount that retrieves the length of the thought's reactions array field on query.