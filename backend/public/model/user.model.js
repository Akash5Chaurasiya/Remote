"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose = require('mongoose');
const skillSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});
const professionalSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    techStack: String,
    skillsUsed: [String],
    timePeriod: String,
});
const educationalSchema = mongoose.Schema({
    degreeName: {
        type: String,
        required: true,
    },
    schoolName: {
        type: String,
        required: true,
    },
    timePeriod: String,
});
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    skills: [skillSchema],
    professionalExperience: [professionalSchema],
    educationalExperience: [educationalSchema]
});
exports.userModel = mongoose.model('user', userSchema);
