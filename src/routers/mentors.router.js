import express from 'express'
import * as mentorUsesCases from '../useCases/mentors.use.js'
const router = express.Router()

router.get('/', async(request, response) => {
    try {
        const allMentors = await mentorUsesCases.getAll()
        response.json({
            success: true,
            data: {
                mentors: allMentors
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

router.get('/:idMentor', async (request, response) => {
    try {
        const { idMentor } = request.params
    const getMentor = await mentorUsesCases.getById(idMentor)
    response.json({
        success: true,
        data: {
            getMentor
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

router.post('/', async(request, response) => {
    try {
        const {body: dataMentor } = request
        const newMentor = mentorUsesCases.create(dataMentor)
        response.json({
            success: true,
            message: 'El mentor se ha creado con éxito!'
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: true,
            message: error.message
        })
    }
})

export default router