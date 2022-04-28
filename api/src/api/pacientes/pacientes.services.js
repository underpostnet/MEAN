const Paciente = require('./pacientes.model');

const pacientesService = {};

// Todos los servicios del CRUD de pacientes

// Find all pacientes
pacientesService.findAll = async () => {
  try {
    const result = await Paciente.find();
    return result;
  } catch (err) {
    return err;
  }
};

// Find paciente by id
pacientesService.findById = async (id) => {
  try {
    const result = await Paciente.findById(id);
    return result;
  } catch (err) {
    return err;
  }
};

// Create paciente
pacientesService.create = async (paciente) => {
  try {
    const newPaciente = new Paciente(paciente);
    await newPaciente.save();
    return newPaciente;
  } catch (err) {
    return err;
  }
};

// Update paciente
pacientesService.update = async (id, paciente) => {
  try {
    const result = await Paciente.findByIdAndUpdate(id, paciente);
    return result;
  } catch (err) {
    return err;
  }
};

// Delete paciente
pacientesService.delete = async (id) => {
  try {
    const result = await Paciente.findByIdAndRemove(id);
    return result;
  } catch (err) {
    return err;
  }
};

// Si existe imagen en el body, se busca paciente y se asocia imagen a fotoPersonal de paciente y se guarda imagen con multer
pacientesService.uploadImage = async (id, file) => {
  try {
    // Se busca paciente por id y se asocia imagen a fotoPersonal de paciente
    const result = await this.findByIdAndUpdate(id, {
      fotoPersonal: file.filename,
    });
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = pacientesService;
