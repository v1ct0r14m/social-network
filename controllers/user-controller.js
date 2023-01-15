const { Shema, model } = require('mongoose')

const userController = {
    getUsers(req, res) {
        User.find({}).populate({
            path: 'thoughts'
        })
        .populate({
            path: 'friends'
        })
        .select
    }
}