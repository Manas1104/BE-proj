const express = require('express');
const multer = require('multer');
const { uploadDocument } = require('../controllers/documentController');
const authMiddleware = require('../middlewares/authMiddleware');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.env.STORAGE_PATH);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const router = express.Router();

// POST /api/documents/upload
router.post('/upload', authMiddleware, upload.single('file'), uploadDocument);

module.exports = router;
