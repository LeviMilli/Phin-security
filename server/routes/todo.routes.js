const express = require('express')
const router = express.Router()


let TodoModel = require("../models/Todo.model")

router.get('/todo', (req, res) => {
    TodoModel.find()
         .then((todos) => {
            res.status(200).json(todos)
         
            })
         .catch((err) => {
              res.status(500).json({
                   error: 'Something went wrong',
                   
              })
         })         
})


// used to specify todos and edit
 router.get('/todo/:id', (req, res) => {
     TodoModel.findById(req.params.id)
      .then((response) => {
           res.status(200).json(response)
      })
      .catch((err) => {
           res.status(500).json({
                error: 'Something went wrong',
                message: err
           })
      }) 
 })



 //route used for creating a new todo for myrecipes
 router.post('/create/todo', (req, res) => {  
     const {title, description} = req.body;
     console.log(req.body)
     TodoModel.create({title: title, description: description})
           .then((response) => {
                res.status(200).json(response)
                
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           })  
 })

 router.put('/todo/:id', (req, res) => {  
     const {title, description} = req.body;
     
     console.log(req.body)
     TodoModel.updateOne({title: title, description: description})
           .then((response) => {
                res.status(200).json(response)
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           })  
 })

 router.delete("todo/:id")




 

module.exports = router;