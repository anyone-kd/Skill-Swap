const express = require('express');
const router = express.Router();
const Person = require('./../module/Person');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved")
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "error": "Internal server error" });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "error": "Internal server error" });
    }
})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            res.status(200).json(response);
        } else {
            res.status(404).json({ "error": "Invalid work type" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ "error": "Internal server error" });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatePerson = req.body;
        const response = await Person.findByIdAndUpdate(id, updatePerson, {
            new: true,
            runValidators: true,
        })
        if (!response) {
            return res.status(404).json({ "error": "Person not found" });
        }
        console.log("data updated")
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ "error": "Internal server error" });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);
        if (!response) {
            return res.status(404).json({ "error": "Person not found" });
        }
        console.log("data deleted")
        res.status(200).json({"message":"person deleted"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ "error": "Internal server error" });
    }
})

module.exports = router;