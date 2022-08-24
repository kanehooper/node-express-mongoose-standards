import express from 'express'
import { getStudents, addStudent } from '../controllers/studentsController.js'

const router = express.Router()

router.route('/').get(getStudents).post(addStudent)

export { router }
