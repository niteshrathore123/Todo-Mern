const express=require('express');
const router=express.Router();
const Todo=require('../models/Todo');


//get all the Todos.
router.get('/todos',async(req,res)=>{
    const todos=await Todo.find();

    res.json(todos);
});

//create a new Todo.
router.post('/todos/new',async(req,res)=>{
    // if(req.body==="" || !req.body){
    //     return;
    // }
    console.log(req.body)
    const newTodo= new Todo(
        req.body
    )
    var addedTodo=await newTodo.save();
    res.json(addedTodo);
});

//delete todo
router.delete('/todos/delete/:id',async(req,res)=>{
    const todoList=await Todo.findByIdAndDelete(req.params.id);
    res.json(todoList);
})
module.exports=router;

