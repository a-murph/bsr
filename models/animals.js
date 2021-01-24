const mongoose = require('mongoose');

const { Schema } = mongoose;

const animalSchema = new Schema({
  type: String,
  name: String,
  latinName: String,
  country: [String],
  lifespan: Number,
  focus: String,
  weightMale: Number,
  weightFemale: Number,
  weightMaleButchered: Number,
  weightFemaleButchered: Number,
  maturity: Number,
  eggCount: Number,
  eggSize: [String],
  eggColor: String,
  broodiness: String,
  color: [String],
  offspringCount: Number,
  flight: String,
  autosexing: Boolean,
  comb: [String],
  tags: [String],
  weatherTolerance: {
    heat: String,
    cold: String
  },
  temperament: [String],
  selfReliance: {
    freeRange: String,
    confinement: String
  },
  sources: [String]
}, {
  collation: { locale: 'en_US', strength: 1 }
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;