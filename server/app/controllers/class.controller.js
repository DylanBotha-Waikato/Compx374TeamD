// Import model
const Class = require("../models/class.model");

// Controller to get all classes
exports.getAllClasses = (req, res) =>{

    Class.retrieveAllClasses((err, data)=>{

        // If an error occurs 
        if(err)
            res.status(500).send({message:err.message || "Some error occurred while retrieving classes."});
        else 
            res.send(data);
    });
};

// Controller to create a new class
exports.createClass = (req, res) => {

    //If no data is inserted, display error 
    if (!req.body) {
        res.status(400).send({message: "Content for creating class is empty!"});
    }

    // Get new class values
    const _class = new Class({
        className: req.body.className
    });

    // Insert the class into the database
    Class.createNewClass(_class, (err, data) =>{
        //display error 
        if(err)
            res.status(500).send({message: err.message || "Some error occurred while creating the class."});
        else 
            res.send(data);
    });
};

// Controller to remove a specific class
exports.removeClassByID = (req, res) => {

    //if no id is taken display error 
    if(!req.params.classID){
        res.status(400).send({message: "No id added"});
    }

    // Get the class ID
    const classID = req.params.classID;

    // Remove the class from the database
    Class.removeByID(classID, (err, data) =>{
        //display error 
        if(err)
            res.status(500).send({message: err.message || "Some error occurred while creating the class."});
        else 
            res.send(data);
    });
};

// Controller to GET a class by its ID
exports.getByID = (req, res) => {

    //if no id is taken display error 
    if(!req.params.classID){
        res.status(400).send({message: "No id added"});
    }

    // Get the class ID
    const classID = req.params.classID;

    // Get the class from the database
    Class.getByID(classID, (err, data) =>{
        //display error 
        if(err)
            res.status(500).send({message: err.message || "Some error occurred while getting the class."});
        else 
            res.send(data);
    });
};

// Controller to GET a class by its name
exports.getByName = (req, res) => {

    //if no name is taken display error 
    if(!req.params.className){
        res.status(400).send({message: "No name added"});
    }

    // Get the class Name
    const className = req.params.className;

    // Get the class from the database
    Class.getByName(className, (err, data) =>{
        //display error 
        if(err)
            res.status(500).send({message: err.message || "Some error occurred while getting the class."});
        else 
            res.send(data);
    });
};