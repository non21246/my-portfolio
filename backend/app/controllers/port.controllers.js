const db = require('../models')
const Experience = db.experience

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).json({message: "Content can not be empty!"})
        return;
    }

    const experience = new Experience(
        {
            uml_name: req.body.uml_name,
            percent: req.body.percent
        }
    );

    experience
    .save(experience)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500)
        .json({message: err.message || "Some error occurred while creating the experience."})
    })
}

exports.update = (req, res) => {
    if(!req.body) {
       return res.status(400).json({message: "Data to update connot be empty!"});
    }
    
    const id = req.params.id

    Experience.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).json({message:`Cannot update data with id = ${id}`})
        } 
        else{
            res.json({message: "Data was updated succesfully"})
        }
    })
    .catch(err => {
        res.status(500)
        .json({message: err.message || "Error updating data."})
    })
}

exports.findAll = (req, res) => {
    Experience.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500)
        .json({message: err.message || "Some error occurred while find the experience."})
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    
    Experience.findById(id)
    .then(data => {
        if(!data){
            res.status(404).json({message:"Not Found"})
        } 
        else{
            res.json(data)
        }
    })
    .catch(err => {
        res.status(500)
        .json({message: err.message || "Some error occurred while find the experience."})
    })
}


exports.delete = (req, res) => {
    const id = req.params.id

    Experience.findByIdAndRemove(id, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).json({message:`Cannot delete data with id = ${id}`})
        } 
        else{
            res.json({message: "Data was deleted succesfully"})
        }
    })
    .catch(err => {
        res.status(500)
        .json({message: err.message || "Cannot deleting data."})
    })
}

