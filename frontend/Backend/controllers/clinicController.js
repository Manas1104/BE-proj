const Doctor = require('../models/Doctor');

// Search nearby clinics (doctors) by location
exports.searchClinics = async (req, res) => {
    const { lat, lng } = req.query;

    try {
        const doctors = await Doctor.find({
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [parseFloat(lng), parseFloat(lat)]
                    },
                    $maxDistance: 5000 // 5 km radius
                }
            }
        });

        res.json({ doctors });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
