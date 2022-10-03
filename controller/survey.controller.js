const { isValidObjectId } = require('mongoose')
const surveyModel = require('../models/survey.model')

const getAll = (req, res, next) => {
  const { offset = 0, limit = 10 } = req.query;
  let surveys;
  surveyModel
    .find()
    .limit(limit)
    .skip(limit * offset)
    .sort({ createdAt: -1 })
    .lean()
    .then((surveysData) => {
      cocktails = surveysData;
      return surveyModel.countDocuments();
    })
    .then((countSurvey) => {
      res
        .status(200)
        .json({
          results: cocktails,
          page: +offset,
          maxPage: Math.floor(countSurvey / +limit),
        });
    })
    .catch(next);
};

const getOne = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new Error('Error: Invalid mongo ID');
    }
    surveyModel
      .findById(id)
      .then((survey) => {
        res.status(200).json(survey);
      })
      .catch(next);
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};



const create = (req, res, next) => {
  const {
    proteinTurron,
    flavour,
    brittleness,
    weeklyNumber,
    alternative,
    likertScale,
  } = req.body;

  console.log(req.body);

  surveyModel
    .create({
      proteinTurron,
      flavour,
      brittleness,
      weeklyNumber,
      alternative,
      likertScale,
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
};

const updateOne = (req, res, next) => {
  try {
    const { id } = req.params;
    console.log('request ', req.body)
    if (!isValidObjectId(id)) {
      throw new Error('Error: Invalid mongo ID');
    }
    const {
      proteinTurron,
      flavour,
      brittleness,
      weeklyNumber,
      alternative,
      likertScale,
    } = req.body;

    surveyModel
      .findByIdAndUpdate(id, {
        proteinTurron,
        flavour,
        brittleness,
        weeklyNumber,
        alternative,
        likertScale,
      })
      .then((data) => {
        console.log(data)
        res.status(204);
      })
      .catch(next);
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};

const deleteOne = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new Error('Error: Invalid mongo ID');
    }
    // console.log(id)
    surveyModel
      .findByIdAndDelete(id)
      .then((data) => {

        res.sendStatus(204);
      })
      .catch(next);
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};


module.exports = {
  create,
  getAll,
  getOne,
  updateOne,
  deleteOne
};

