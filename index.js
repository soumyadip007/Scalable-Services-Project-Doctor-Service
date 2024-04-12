const { Router } = require('express');
const doctor = require('./doctor');
const router = new Router();
const v1 = new Router();

v1.use('/doctor', doctor);

router.use('/v1', v1);

module.exports = router;

