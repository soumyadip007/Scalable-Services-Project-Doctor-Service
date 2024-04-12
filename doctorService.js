const Doctor = require('../mongoose');

module.exports.createDoctor = async (doctorData) => {
    const doctor = new Doctor(doctorData);
    return await doctor.save();
};

module.exports.updateDoctor = async (id, doctorData) => {
    return await Doctor.findByIdAndUpdate(id, doctorData, { new: true });
};

module.exports.deleteDoctor = async (id) => {
    return await Doctor.findByIdAndDelete(id);
};

module.exports.getDoctorById = async (id) => {
    return await Doctor.findById(id);
};

module.exports.getAllDoctors = async () => {
    return await Doctor.find();
};
