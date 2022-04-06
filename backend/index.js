const express=require('express');
const mongoose=require('mongoose');
const app=express();
const todoRoutes=require('./routes/Todo');
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todolist',{
    useNewUrlParser:true,
    useUnifiedTopology:true

    }).then(()=>{
    console.log("DB connected");
    }).catch((err)=>{
    console.log("Error is ",err);
});

app.use(todoRoutes);

app.listen(3000,()=>{
    console.log("Listening at Port 3000");
})




