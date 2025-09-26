const express = require("express");
const { getDoctorById } = require("../controllers/doctorController");

const router = express.Router();

// GET /api/doctors/:id → fetch doctor profile
router.get("/:id", getDoctorById);

module.exports = router;
