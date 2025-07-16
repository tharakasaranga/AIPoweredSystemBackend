const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
    .catch(err => console.error(err));