import {Schema , model} from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        dropDups: true
    },
    password: {
        type: String,
        requires: true,
        trim: true
    },
    role: {
        type: Number,
        required: true,
        default: 0
    }

})

export default model('User', userSchema)