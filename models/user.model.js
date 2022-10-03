const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String, unique: true, required: true },
        gender: { type: String },
        age: { type: Number },
        sport: { type: Boolean },
        city: { type: String },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        role: {
            type: String,
            enum: ['SURVEYED', 'PA'],
            default: 'SURVEYED'
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const userModel = model('User', userSchema);

module.exports = userModel;