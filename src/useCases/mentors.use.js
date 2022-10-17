import { Mentors } from '../models/mentors.model.js'

function getAll(){
    return Mentors.find({})
}

function getById(idKoder) {
    return Mentors.findById(idKoder)
}

function create(newKoder) {
    return Mentors.create(newKoder)
}

function update(idKoder, updateKoder, object) {
    return Mentors.findByIdAndUpdate(idKoder, updateKoder, object)
}

function deleted(idKoder) {
    return Mentors.findByIdAndDelete(idKoder)
}

export {
    getAll,
    getById,
    create,
    update,
    deleted
}