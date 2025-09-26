const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    date: { type: String, required: true },  // ISO date string (or Date type if desired)
    time: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
