const express = require('express');
const app = express();

app.get('/', {hello:'friend'});

const PORT = process.env.PORT || 5000;
app.listen(PORT);