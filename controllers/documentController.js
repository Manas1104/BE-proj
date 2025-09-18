const Document = require('../models/Document');
const Patient = require('../models/Patient');

// Upload document metadata
exports.uploadDocument = async (req, res) => {
    const { patientId } = req.body;
    const file = req.file;

    if (!file)
        return res.status(400).json({ error: 'No file uploaded' });

    try {
        const document = new Document({
            patient: patientId,
            filename: file.filename,
            originalName: file.originalname,
            path: file.path,
        });

        await document.save();
        res.status(201).json({ message: 'Document uploaded successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
