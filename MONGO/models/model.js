const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database Connected'))
  .catch((error) => console.error('Error connecting to database:', error));

const dataSchema = new mongoose.Schema({
    name: { required: true, type: String },
    age: { required: true, type: Number }
});

module.exports = mongoose.model('datacollection', dataSchema);
