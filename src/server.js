/**
 * ! Server:  Este archivo guardará la definicion del server
 * ? Que middlewares va a usar - montar los middlewares
 * ? Montar los routers
 */

import express from 'express'
import cors from 'cors'
import kodersRouter from './routers/koders.router.js'
import mentorsRouter from './routers/mentors.router.js'
import authRouter from './routers/auth.router.js'
const server = express()

// middlewares
server.use(express.json())

// Routers
server.use('/koders', kodersRouter)
server.use('/mentors', mentorsRouter)
server.use('/auth', authRouter)

// Middleware - 
server.use(cors())

export { server } // con esta sintaxis indicamos que asi debe ocuparse cuando se mande a llamar en el import de otros archivos