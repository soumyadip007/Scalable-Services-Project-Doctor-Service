const doctorService = require('../service/doctorService');

module.exports.create = async (req, res) => {
    try {
        const doctor = await doctorService.createDoctor(req.body);
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.update = async (req, res) => {
    try {
        const updatedDoctor = await doctorService.updateDoctor(req.params.id, req.body);
        res.json(updatedDoctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.delete = async (req, res) => {
    try {
        await doctorService.deleteDoctor(req.params.id);
        res.json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.read = async (req, res) => {
    try {
        const doctor = await doctorService.getDoctorById(req.params.id);
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.readAll = async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
