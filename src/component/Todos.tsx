
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from '../features/todo/todoSlice';
import { RootState } from "../app/store";

function Todos() {
  const todos = useSelector((state: RootState) => state.todoReducer.todos); 
  const dispatch = useDispatch();
  console.log(todos);

  return (
    <div>
      <h1>Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h1>{todo.text}</h1>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
