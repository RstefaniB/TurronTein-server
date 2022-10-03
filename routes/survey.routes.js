const router = require('express').Router();
const validateToken = require('../middleware/validateToken.middleware');

const {
    create,
    getAll,
    getOne,
    updateOne,
    deleteOne } = require('./../controller/survey.controller')



/**
 * GET
 */
router.get('/', getAll);
router.get('/:id', validateToken, getOne); //validateToken

/**
 * POST
 */
router.post('/', create);

/**
 * PUT
 */
router.put('/:id', updateOne);

/**
 * DELETE
 */
router.delete('/:id', deleteOne);

module.exports = router;