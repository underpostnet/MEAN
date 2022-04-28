const { Router } = require('express');

const router = Router();

const pacientes = require('./pacientes');

router.use('/pacientes', pacientes);

module.exports = router;
