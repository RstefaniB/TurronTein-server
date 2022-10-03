const { Schema, model } = require('mongoose');

const surveySchema = new Schema(
    {
        surveyed: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            // required: true
            //aqui esperar a crear el user 
        },

        // idSurvey: { type: String },
        proteinTurron: { type: Boolean },
        flavour: { type: String, enum: ["yema", "chocolate", "Frutos", "hazelnut", "tradicional"] },
        brittleness: {
            type: String, enum: ["softchew", "semi-hard", "gominola", "hard"]
        },
        weeklyNumber: { type: Number },
        alternative: {
            type: String, enum: ["yogurt", "ice cream", "smoothie", "cake"]
        },
        likertScale: { type: Number },
        interested: { type: Boolean },
        eatingHabbits: { type: Boolean }

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const surveyModel = model('survey', surveySchema);

module.exports = surveyModel;