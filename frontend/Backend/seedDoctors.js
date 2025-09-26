require('dotenv').config();
const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');  // Make sure this path is correct
const connectDB = require('./utils/connectDB');

const doctors = [
    {
        name: 'Dr. Alice Smith',
        email: 'alice.smith@example.com',
        password: 'password123',  // Ideally hashed, but for seeding simplicity we'll hash later
        role: 'doctor',
        specialization: 'General Physician',
        location: { type: 'Point', coordinates: [77.5946, 12.9716] }  // Example coordinates (lng, lat)
    },
    {
        name: 'Dr. Bob Johnson',
        email: 'bob.johnson@example.com',
        password: 'password123',
        role: 'doctor',
        specialization: 'Cardiologist',
        location: { type: 'Point', coordinates: [77.6090, 12.9352] }
    },
    {
        name: 'Dr. Carol Lee',
        email: 'carol.lee@example.com',
        password: 'password123',
        role: 'doctor',
        specialization: 'Dermatologist',
        location: { type: 'Point', coordinates: [77.6010, 12.9278] }
    }
];

const seedDoctors = async () => {
    try {
        await connectDB();
        console.log('MongoDB connected');

        // Hash passwords before inserting
        const bcrypt = require('bcryptjs');

        for (let doc of doctors) {
            const salt = await bcrypt.genSalt(10);
            doc.password = await bcrypt.hash(doc.password, salt);
        }

        await Doctor.deleteMany({ role: 'doctor' });  // Clean previous data
        await Doctor.insertMany(doctors);

        console.log('Doctors seeded successfully!');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDoctors();
