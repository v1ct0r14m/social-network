const { Shema, model } = require('mongoose')

const userController = {
    getUsers(req, res) {
        User.find({}).populate({
            
        })
    }
}