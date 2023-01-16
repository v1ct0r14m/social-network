const { model } = require('mongoose')
const { User, Thought } = require('models')

const userController = {

    getUsers(req, res) {
        User.find({}).then(userData => {
            console.log(userData)
            res.json(userData)
        })
        if (err) throw err
        res.json(err)    
    },
    getUserById(req, res) {
        User.findOne({_id: req.params.userId})
        .then(userData => {
            console.log(userData)
            if(!userData) {
            res.status(404).json({message: 'user not found'})
        }
        res.json(userData)
        })
        if (err) throw err
    },
    updateUser(req, res) {
        User.findOneAndUpdate({_id: req.params.userId},
            req.body,
            {new.true}
        )
        .then(userData => {
            console.log(userData)
            if(!userData){
                res.status(404).json({message: 'user not found'})
            }
            res.json(userData)
        })
        if (err) throw err
    },
    createUser(req, res) {
        User.createUser(req.body).then(userData => {
            console.log(userData)
            res.json(userData)
        })
        if (err) throw err
    },
    deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.userId})
        .then(userData => {
            console.log(userData)
            if(!userData){
                res.status(404).json({message: 'user not found'})
                return
            }
            if(userData.Thought) {
                console.log('user has thoughts')
                return Thought.deleteMany({username: userData, username})
                .then(() => {
                    res.json(userData)
                })
            } else {
                res.json(userData)
            }
        })
        if (err) throw err
    },
    
    addFriend(req, res) {
        user.findOneAndUpdate(
            {_id: req.params.userId},
            {push: {friend: req.params.friendId}},
            {new: true}
        )
        .then(userData => {
            console.log(userData)
            if(!userData){
                res.status(404).json({message: 'user not found'})
                return
            }
            res.json(userData)
        })
        if (err) throw err
    },
    
    deleteFriend(req, res) {
        user.findOneAndUpdate(
            {_id: req.params.userId},
            {pull: {friend: req.params.friendId}},
            {new: true}
        )
        .then(userData => {
            console.log(userData)
            if(!userData){
                res.status(404).json({message: 'user not found'})
                return
            }
            res.json(userData)
        })
        if (err) throw err
    }
}

module.exports = userController