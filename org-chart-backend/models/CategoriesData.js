const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  id: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  relationship: {
    type: String,
    trim: true,
    required: true,
  },
  children: [{ type: Object }],
});

const categoriesDataSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    relationship: {
      type: String,
      trim: true,
      required: true,
    },
    children: [{ type: nodeSchema }],
  },
  {
    timestamps: true,
  }
);

module.exports = categoriesDataSchema;
