import express from 'express'
import * as koderUsesCases from '../useCases/koders.use.js'
import {auth} from '../middlewares/auth.js'
const router = express.Router()

router.get('/', auth, async (request, response) => {
    try {
        const allKoders = await koderUsesCases.getAll()
        response.json({
            success: true,
            data: {
                allKoders
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.get('/:idKoder', async (request, response) => {
    try {
        const { idKoder } = request.params
        const getKoder = await await koderUsesCases.getById(idKoder)
        response.json({
            success: true,
            data: {
                koder: getKoder
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const {body: dataKoder} = request
        const newKoder = await koderUsesCases.create(dataKoder)
        response.json({
            success: true,
            message: 'Koder creado con éxito!',
            koder: newKoder
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.patch('/:idKoder', async (request, response) => {
    try {
        const { idKoder } = request.params
        const { body: newKoder } = request

        const koderUpdated = await koderUsesCases.update(idKoder, newKoder, {new: true})
        response.json({
            success: true,
            message: 'Koder actualizado con éxito!',
            data: {
                koder: koderUpdated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.delete('/:idKoder', async (request, response) => {
    try {
        const { idKoder } = request.params
        const koderDeleted = await koderUsesCases.deleted(idKoder);

        response.json({
            success: true,
            message: 'Koder eliminado con éxito!',
            koder: {
                koderDeleted
            }
        })
    } catch (error) {
        response.status(400)
        response.json({

        })
    }
})

export default router