const express = require('express');
const router = express.Router();
const Student = require('../models/student');


//Get all
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.send(students);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


//Get one
router.get("/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.send(student);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});


//Update one
router.patch("/:id", async (req, res) => {
    try {
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators: true});
        res.status(201).json(updateStudent);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});


//Delete one
router.delete("/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        res.status(201).json(deleteStudent);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});


//Insert one
router.post("/", async (req, res) => {
    const student = new Student ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    });

    try {
        const newStudent = await Student.create(student);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({message: error.message});

    }
});


module.exports = router;