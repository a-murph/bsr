const mongoose = require('mongoose');
const gql = require('graphql-tag');
const AnimalStore = require('../stores/animals');

const typeDefs = gql`
  type Query {
    animals(filter: AnimalFilterInput!, sort: AnimalSortInput): [Animal]!
    animal(id: String!): Animal
  }

  type Mutation {
    editStable(input: EditStableInput!): EditStablePayload!
  }

  input EditStableInput {
    animalId: String!
    userId: String!
  }

  type EditStablePayload {
    success: Boolean!
    message: String
    stable: [Animal]!
  }

  type Animal {
    id: ID!
    type: String!,
    name: String!,
    latinName: String!,
    eggCount: Int,
    eggSize: [String],
    eggColor: String,
    country: [String],
    color: [String],
    lifespan: Int,
    focus: String,
    weightMale: Float,
    weightMaleButchered: Float,
    weightFemale: Float,
    weightFemaleButchered: Float,
    maturity: Int,
    broodiness: String,
    flight: String,
    offspringCount: Int,
    autosexing: Boolean,
    comb: [String],
    tags: [String],
    weatherTolerance: WeatherToleranceType,
    selfReliance: SelfRelianceType,
    temperament: [String],
    sources: [String]
  }

  type SelfRelianceType {
    freeRange: String,
    confinement: String
  }

  type WeatherToleranceType {
    heat: String,
    cold: String
  }

  input AnimalFilterInput {
    animalType: AnimalType!
    countries: [String]
    focus: [String]
    autosexing: Boolean
    tags: [String]
    femaleWeight: AnimalWeightFilter
    maleWeight: AnimalWeightFilter
    eggCount: Int
    eggSize: [String]
    eggColor: [String]
    broodiness: [String]
    color: [String]
    flight: [String]
    coldTolerance: [String]
    heatTolerance: [String]
    temperament: [String]
    freeRange: [String]
    confinement: [String]
  }

  input AnimalSortInput {
    name: Int
    maturity: Int
    lifespan: Int
  }

  input AnimalWeightFilter {
    max: Float
    min: Float
    isLive: Boolean!
    isButchered: Boolean!
  }

  enum AnimalType {
    chicken
    cow
    sheep
    pig
    horse
  }
`;

const resolvers = {
  Query: {
    animals: async (_, { filter, sort }) => {
      const animals = await AnimalStore.getAnimals(filter, sort);
      return animals;
    }
  }
};

module.exports = {
  typeDefs, resolvers
};