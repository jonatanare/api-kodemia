import mongoose, { mongo } from "mongoose";

// Schema de Koders
const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100,
        trim: true
    },
    module: {
        type: Number,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['h', 'm']
    }
})

// crear el modelo
const Mentors = mongoose.model('mentors', mentorSchema)

export { Mentors }