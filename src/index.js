const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
const PORT = 8000;
const router = express();

// To show Server logs
router.use(morgan("short"));

// router
router.use('/', routes);

// http://127.0.0.1:8000/ OR http://localhost:8000/
router.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} .....`);
});