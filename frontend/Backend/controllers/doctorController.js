const Doctor = require("../models/Doctor");

// @desc Get doctor by ID
// @route GET /api/doctors/:id
// @access Public
const getDoctorById = async (req, res) => {
  try {
    // Exclude sensitive fields (password, __v)
    const doctor = await Doctor.findById(req.params.id).select("-password -__v");

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getDoctorById };
