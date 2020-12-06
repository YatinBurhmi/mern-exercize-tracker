const router = require('express').Router(); // importing Router() from express
const User = require('../models/user.model');  //importing model


// first endpoint '/' that handles http GET request

/* .find() is mongoose method that gets the list of all the users in MongoDB ATLAS Database.
    It returns a promise. 
*/
router.route('/').get((req, res) =>{
    User.find()  
        .then(users => res.json(users)) //handling promise
        .catch(err => res.status(400).json('Error: ' + err));
});


// '/add' endpoint handles http POST request

// .save() is used to add to MongoDB Atlas
router.route('/add').post((req, res) => {
    const username = req.body.username;  // the new added username

    const newUser = new User({username}); //creating new instance of User using username

    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;