const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
const PORT = 8080;
const router = express();

// To show Server logs
router.use(morgan("short"));

// router
router.use('/', routes);

// http://127.0.0.1:8080/ OR http://localhost:8080/
router.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} .....`);
});