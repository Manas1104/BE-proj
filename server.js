const express = require('express');
const connectDB = require('./utils/connectDB');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const doctorRoutes = require('./routes/doctorRoutes');


// Import routes
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const clinicRoutes = require('./routes/clinicRoutes');
const documentRoutes = require('./routes/documentRoutes');
const userRoutes = require('./routes/userRoutes');






const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());  // Parse JSON request bodies
app.use('/uploads', express.static(path.join(__dirname, process.env.STORAGE_PATH)));  // Serve uploaded files

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/clinics', clinicRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/users', userRoutes);

app.use('/api/doctors', doctorRoutes);


// Health check route
app.get('/', (req, res) => res.send('CareConnect API is running'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
