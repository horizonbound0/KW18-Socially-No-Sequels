const router = require('express').Router();

const {

    // GET all users
    getUsers,

    // GET one user by _id and add friend and thought data
    getSingleUser,

    // POST new user
    createUser,

    // DELETE a user by _id
    deleteUser,

} = require('../../controllers/userController');


// POST to add a new friend to a user's friend list

// PUT to update by _id
// BONUS When a user is deleted, it removes their thoughts as well.
// DELETE a friend from a user's friend list

// Using the get and create functions from the userController
router.route('/').get(getUsers).post(createUser);

// using the getSingle and delete functions from the userController
router.route('/:userId').get(getSingleUser).delete(deleteUser);

module.exports = router;