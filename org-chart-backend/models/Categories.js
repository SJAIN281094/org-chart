const mongoose = require('mongoose');
const CategoriesDataSchema = require('./CategoriesData');

const categoriesSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      trim: true,
      required: true,
    },
    data: CategoriesDataSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('categories', categoriesSchema);
