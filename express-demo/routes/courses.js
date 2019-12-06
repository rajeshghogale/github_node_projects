const express = require('express');
const router = express.Router();
const Joi = require('joi');

const courses = [
    {id :1 , name :'course 1'},
    {id :2 , name :'course 2'},
    {id :3 , name :'course 3'},
]

router.get('/',(req,res) => {
    res.send(courses);
});

router.get('/:year/:month', (req,res) => {
    res.send(req.params);
});

router.get('/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(400).send(`The course with id: ${req.params.id} not valid `);
    res.send(course);
});

router.post('/', (req,res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body,schema);
    if(result.error) return res.status(400).send(result.error.details[0].message)
    

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

router.put('/:id', (req,res) => {
    //finding a couse with id
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //if not found return 404
    if(!course) return res.status(400).send(`The course with id: ${req.params.id} not valid `);

    //if object is not valid return 400
    if(!req.body.name || req.body.name.length < 3){
        //400 bad request
        res.status(400).send('Names is required');
    }

    course.name = req.body.name;
    res.send(course);
});

router.delete('/:id', (req,res) => {
    //finding a couse with id
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //if not found return 404
    if(!course) return res.status(400).send(`The course with id: ${req.params.id} not valid `);

    //delete  the object based on id
    const index = courses.indexOf(course);
    courses.splice(index,1);
    
    res.send(course);
});

module.exports = router