const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    filename: { type: String, required: true },
    originalName: { type: String, required: true },
    path: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Document', documentSchema);
