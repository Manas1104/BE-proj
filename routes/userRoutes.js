const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getProfile } = require('../controllers/userController');

const router = express.Router();

// GET /api/users/profile
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
