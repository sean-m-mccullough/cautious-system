const mongoose = require('mongoose');
const Item = require('./../models/item.js');

const mongoURI = process.env.MONGO_URI || 'mongodb://root:example@localhost:27017/?authSource=admin';

async function seed() {
  await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

  await Item.deleteMany({});
  await Item.insertMany([
    { id: 1, name: "Stand up node app", isComplete: true },
    { id: 2, name: "Initialize MongoDB", isComplete: true },
    { id: 3, name: "Seed DB with a few records", isComplete: true },
    { id: 4, name: "Enjoy a cold beverage", isComplete: false },
  ]);

  console.info('Seeding complete');
  mongoose.disconnect();
}

seed();