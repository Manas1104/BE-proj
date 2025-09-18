const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');

// Book an appointment
exports.bookAppointment = async (req, res) => {
    const { doctorId, patientId, date, time } = req.body;

    try {
        const appointment = new Appointment({
            doctor: doctorId,
            patient: patientId,
            date,
            time,
        });

        await appointment.save();
        res.status(201).json({ message: 'Appointment booked successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Cancel an appointment
exports.cancelAppointment = async (req, res) => {
    const { appointmentId } = req.params;

    try {
        await Appointment.findByIdAndDelete(appointmentId);
        res.json({ message: 'Appointment canceled successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// List appointments for a user (doctor or patient)
exports.listAppointments = async (req, res) => {
    const { userId, role } = req.params;

    try {
        const filter =
            role === 'doctor'
                ? { doctor: userId }
                : { patient: userId };

        const appointments = await Appointment.find(filter)
            .populate('doctor', 'name specialization')
            .populate('patient', 'name email');

        res.json({ appointments });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
