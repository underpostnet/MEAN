const { Router } = require('express');
const pacientesCtrl = require('./pacientes.controller');

const router = Router();

// Find all pacientes
router.get('/', pacientesCtrl.findAll);

// Find paciente by id
router.get('/:id', pacientesCtrl.findById);

// Create paciente
router.post('/', pacientesCtrl.create);

// Update paciente
router.put('/:id', pacientesCtrl.update);

// Delete paciente
router.delete('/:id', pacientesCtrl.delete);

// Upload image
router.post('/uploads/:id', pacientesCtrl.uploadImage);

// Get image
router.get('/uploads/:imageFile', pacientesCtrl.getImage);

module.exports = router;
