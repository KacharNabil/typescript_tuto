import {createSlice, nanoid,PayloadAction} from '@reduxjs/toolkit';

interface todo {
    id: string;
    text: string;
}
export interface todosState {
    todos : todo[]
 }

const initialState: todosState = {
    todos :[]
};

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo : (state,action : PayloadAction<string>)=>{
            const todo : todo ={
                id: nanoid(),
                text: action.payload, 
            }
            state.todos.push(todo)

        },
        removeTodo : (state, action :PayloadAction<string>) =>{
                state.todos = state.todos.filter((todo)=>
                todo.id!=action.payload
            )
        }
    }

})

export const {addTodo,removeTodo} =todoSlice.actions;

export default todoSlice.reducer;