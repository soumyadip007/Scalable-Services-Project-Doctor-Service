const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
    },
    bloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true,
    },
    qualifications: [{
        degree: String,
        institute: String,
        year: Number,
    }],
    specialties: [String],
    workExperience: [{
        hospital: String,
        designation: String,
        from: Date,
        to: Date,
    }],
    emergencyContact: {
        name: String,
        relationship: String,
        phoneNumber: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

// Optionally, you can update the `updatedAt` field whenever the document is updated.
doctorSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
