import { Koders } from "../models/koders.model.js"
import bcrypt from "../libs/bcrypt.js"

function getAll() {
    return Koders.find({})
}

function getById(idKoder) {
    return Koders.findById(idKoder)
}

async function create(newKoder) {
    //modificar
    const { email, password } = newKoder
    // find({}) -> []

    const koderFound = await Koders.findOne({email}) // -> {}
    // si lo encuentra -> {}
    // si no lo encuentra -> undefined

    if(koderFound) throw new Error('Ya existe un koder con este email')

    // Encriptar el password
    const encryptedPassword = await bcrypt.hash(password)
    return Koders.create({...newKoder, password: encryptedPassword})
}
function update(idKoder, updateKoder, object) {
    return Koders.findByIdAndUpdate(idKoder, updateKoder, object)
}
function deleted(idKoder) {
    return Koders.findByIdAndDelete(idKoder)
}

export {
    getAll,
    getById,
    create,
    update,
    deleted
}