const express = require('express');
require('./services/passport');

const app = express();

// Passes app into the function exported from authRoutes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);