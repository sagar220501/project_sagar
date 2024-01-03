const express = require('express');
const Model = require('../models/model');
const router = express.Router();

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());



router.post('/post', async (req, res) => {
    const { firstName, lastName, age, gender, address } = req.body;
  
    try {
      const newData = new Model({
        firstName,
        lastName,
        age,
        gender,
        address,
      });
  
      const savedData = await newData.save();
      res.status(200).json(savedData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.get('/getAll', async (req, res) => {
    try {
      const data = await Model.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.get('/getOne/:id', async (req, res) => {
    try {
      const data = await Model.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.patch('/update/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };
  
      const result = await Model.findByIdAndUpdate(id, updatedData, options);
      res.send(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.delete('/delete/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id);
      res.send(`Document with ${data.name} has been deleted..`);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;