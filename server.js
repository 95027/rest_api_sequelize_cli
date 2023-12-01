const express = require('express');
const app = express();


const appRoutes = require('./routes/appRoutes');

app.use('/', appRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));