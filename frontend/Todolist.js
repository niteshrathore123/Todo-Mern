import {useEffect,useState} from 'react';
import axios from 'axios';
function Todolist(){
    let [todoList,setTodoList]=useState("");
    let [text,setTodoInput]=useState("");

    useEffect(()=>{
        axios.get('http://localhost:3000/todos')
        .then(res => res.data)
        .then(data=>setTodoList(data)
            // console.log(data);
            
            // todoList=data;
            // console.log(todoList);
        )
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    const handleDeleteTodo=(id)=>{
        axios.delete(`http://localhost:3000/todos/delete/${id}`);
        setTodoList((todoList)=>{
            return todoList.filter((todo) => todo._id!==id)
        });
        console.log(todoList);

    }

    const handleAddTodo=()=>{
        
        // setTodoList([...todoList,text]);
        axios.post('http://localhost:3000/todos/new',text)
       

        
    }

    return (
        <div>
            <div>
                <input placeholder='Enter Todo Text' name='text'   
                    onChange={(e)=>setTodoInput(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add </button>
            </div>
            <ul>
                {todoList && todoList.map((item,index)=>(
                    <li key={index}>{item.text} <span style={{color:"red",float:"right",cursor:'pointer'}} onClick={()=>handleDeleteTodo(item._id)}>delete</span></li>
                ))}
                
            </ul>
        </div>
    )
}
export default Todolist;