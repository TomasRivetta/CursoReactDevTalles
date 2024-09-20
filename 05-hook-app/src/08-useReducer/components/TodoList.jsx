import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [] }) => {
  return (
    <>
      {/* Componente: TodoList */}
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id} todo={todo}
          />
        ))}
      </ul>
      {/* Fin Componente: TodoList */}
    </>
  );
};
