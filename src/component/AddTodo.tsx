import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addTodo} from '../features/todo/todoSlice';

function AddTodo() {

    const [input , setInput]=useState('');
    const dispatch =useDispatch();

    const addTodoHandler= (e:any) =>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');

    }

  return (


    <div>
        <form onSubmit={addTodoHandler}>
            <input 
            type="text"
            value={input}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)}
            />
            <button type='submit'>
                addTodo
            </button>
        </form>

    </div>
  )
}

export default AddTodo