import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const { JWT_SECRET } = process.env

function sign(payload) {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '1d'})
}

function verify(token) {
    // Se verifica que el token sea válido
    return jwt.verify(token, JWT_SECRET)
}

export default {
    ...jwt,
    sign,
    verify
}