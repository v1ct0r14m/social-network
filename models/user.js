const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/]
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        }
    })

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

const User = model('User', UserSchema)

module.exports = User