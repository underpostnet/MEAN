const fs = require('fs');
const path = require('path');

const pacientes = require('./pacientes.services');

const pacientesCtrl = {};

// Find all pacientes
pacientesCtrl.findAll = async (req, res) => {
  try {
    const result = await pacientes.findAll();
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Find paciente by id
pacientesCtrl.findById = async (req, res) => {
  try {
    const result = await pacientes.findById(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Create paciente
pacientesCtrl.create = async (req, res) => {
  try {
    console.log(req.body);
    const paciente = req.body;
    const result = await pacientes.create(paciente);
    if (!result) {
      res.status(400).json(result.errors);
    } else {
      res.json(result);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update paciente
pacientesCtrl.update = async (req, res) => {
  try {
    const result = await pacientes.update(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete paciente
pacientesCtrl.delete = async (req, res) => {
  try {
    const result = await pacientes.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Edit paciente
pacientesCtrl.edit = async (req, res) => {
  try {
    const result = await pacientes.edit(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Metodo que sube la imagen y lo asocia a fotoPersonal del modelo
pacientesCtrl.uploadImage = async (req, res) => {
  try {
    const file = req.file;
    const { id } = req.params.id;
    // Si no viene archivo, no se hace nada
    if (!file) {
      return res.status(400).send({
        message: 'No se ha subido ninguna imagen',
      });
    }
    const result = await pacientes.uploadImage(id, file);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get paciente image
pacientesCtrl.getImage = (req, res) => {
  const file = req.params.filename;
  const pathFile = `uploads/${file}`;

  if (fs.existsSync(pathFile)) {
    return res.sendFile(path.resolve(pathFile));
  }
  return res.status(404).send({
    status: 'error',
    message: `Image with image: ${file} was not found`,
  });
};

module.exports = pacientesCtrl;
