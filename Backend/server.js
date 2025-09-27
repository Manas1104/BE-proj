const express = require('express');
const connectDB = require('./utils/connectDB');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
<<<<<<< HEAD
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
=======
>>>>>>> d6ececb12d2c9a1beed2d4342117b300af72dbec

// Import routes
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const clinicRoutes = require('./routes/clinicRoutes');
const documentRoutes = require('./routes/documentRoutes');
const userRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

<<<<<<< HEAD

=======
const app = express();
>>>>>>> d6ececb12d2c9a1beed2d4342117b300af72dbec

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(cors({
<<<<<<< HEAD
  origin: 'http://localhost:5173', // allow your frontend
=======
  origin: process.env.FRONTEND_URL || "*", // allow frontend domain
>>>>>>> d6ececb12d2c9a1beed2d4342117b300af72dbec
  credentials: true
}));
app.use(express.json());  

// ✅ Serve uploaded files (make sure STORAGE_PATH exists in Render env vars)
app.use('/uploads', express.static(path.join(__dirname, process.env.STORAGE_PATH || "uploads")));  

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/clinics', clinicRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/doctors', doctorRoutes);

// ✅ Health check (Render pings this)
app.get('/health', (req, res) => res.json({ status: "ok" }));

// ✅ Swagger docs
<<<<<<< HEAD

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "CareConnect API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: process.env.FRONTEND_URL || "http://localhost:5000",
      },
    ],
  },
  apis: ["api/routes/*.js"], // where your API routes are defined
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
=======
>>>>>>> d6ececb12d2c9a1beed2d4342117b300af72dbec
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Backend API is running!');
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
