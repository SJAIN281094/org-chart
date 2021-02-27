const express = require('express');
const router = express.Router();
const { checkSchema, header } = require('express-validator');
const { ValidateAndSanitize } = require('../helper');
const {
  getChartCollection,
  updateChartCollection,
} = require('../controller/chart');

/* eslint-disable */
router.get('/collection/type/:type', getChartCollection);
router.patch(
  '/collection',
  [
    checkSchema({
      collectionId: {
        in: ['body'],
        isString: true,
        isLength: {
          errorMessage: `Collection Id can't be empty`,
          options: {
            min: 1,
          },
        },
      },
      type: {
        in: ['body'],
        isString: true,
        isLength: {
          errorMessage: `Type can't be empty`,
          options: {
            min: 1,
          },
        },
      },
      'collection.id': {
        isString: true,
        errorMessage: 'Invalid Id',
      },
      'collection.relationship': {
        isString: true,
        errorMessage: 'Invalid relationship',
      },
      'collection.name': {
        isString: true,
        errorMessage: 'Invalid Name',
      },
      'collection.title': {
        isString: true,
        errorMessage: 'Invalid Title',
      },
      'collection.children': {
        isArray: true,
        errorMessage: 'Invalid Children Array',
      },
    }),
    header(['Accept'])
      .exists({ checkFalsy: true })
      .withMessage('Accept header is missing'),
  ],
  (req, res, next) => {
    ValidateAndSanitize(req, res, next);
  },
  updateChartCollection
);

module.exports = router;
