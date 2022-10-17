import mongoose from 'mongoose'

// Schema de Koders
const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        enum: ['h', 'm']
    },
    isGraduate: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.*@.*\../
    },
    password: {
        type: String,
        required: true
    }
})

// crear el modelo
const Koders = mongoose.model('koders', koderSchema)

export {Koders}