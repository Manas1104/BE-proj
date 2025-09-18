const express = require('express');
const { bookAppointment, cancelAppointment, listAppointments } = require('../controllers/appointmentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// POST /api/appointments/book
router.post('/book', authMiddleware, bookAppointment);

// DELETE /api/appointments/cancel/:appointmentId
router.delete('/cancel/:appointmentId', authMiddleware, cancelAppointment);

// GET /api/appointments/:userId/:role
router.get('/:userId/:role', authMiddleware, listAppointments);

module.exports = router;
