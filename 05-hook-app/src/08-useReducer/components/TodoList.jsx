import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [] }) => {
  return (
    <>
      {/* Componente: TodoList */}
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            done={todo.done}
          />
        ))}
      </ul>
      {/* Fin Componente: TodoList */}
    </>
  );
};
