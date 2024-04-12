const { Router } = require('express');
const doctorController = require('../controllers/doctor');
const router = Router();

/**
 * @route POST /doctors
 * @desc Create a new doctor
 * @access Internal
 */
router.post('/', doctorController.create);

/**
 * @route GET /doctors
 * @desc Get all doctors
 * @access Internal
 */
router.get('/', doctorController.readAll);

/**
 * @route GET /doctors/:id
 * @desc Get a doctor by ID
 * @access Internal
 */
router.get('/:id', doctorController.read);

/**
 * @route PUT /doctors/:id
 * @desc Update a doctor by ID
 * @access Internal
 */
router.put('/:id', doctorController.update);

/**
 * @route DELETE /doctors/:id
 * @desc Delete a doctor by ID
 * @access Internal
 */
router.delete('/:id', doctorController.delete);

module.exports = router;
