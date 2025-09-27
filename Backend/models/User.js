const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
<<<<<<< HEAD
    role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true }
=======
    role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true },
>>>>>>> d6ececb12d2c9a1beed2d4342117b300af72dbec
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
