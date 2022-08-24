import Student from '../models/Student.js'

/**
 * @desc    Get all students
 * @route   GET /api/v1/students
 * @access  Public
 */
const getStudents = async (req, res) => {
  const students = await Student.find()

  res.status(200).json({ success: true })
}

/**
 * @desc    Create a students
 * @route   POST /api/v1/students
 * @access  Private
 */
const addStudent = async (req, res) => {
  const student = await Student.create(req.body)

  res.status(201).json({ success: true, data: student })
}

export { getStudents, addStudent }
