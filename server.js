const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// for reading the json data from req.body
app.use(bodyParser.json());

// routes
const appRoutes = require('./routes/appRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

app.use('/', appRoutes);
app.use('/api', employeeRoutes);


// custom middleware for error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something went wrong');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));