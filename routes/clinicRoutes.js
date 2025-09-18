const express = require('express');
const { searchClinics } = require('../controllers/clinicController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// GET /api/clinics?lat=&lng=
router.get('/', authMiddleware, searchClinics);

module.exports = router;
