const Animal = require('../models/animals');

class AnimalStore {
  // Get list of animals
  static async getAnimals(filter, sort) {
    return await Animal.find({ type: filter.animalType });
  }
}

module.exports = AnimalStore;