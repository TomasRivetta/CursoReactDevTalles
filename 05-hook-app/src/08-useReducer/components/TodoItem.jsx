export const TodoItem = ({ todo }) => {
  return (
    <>
      {/* Crear un componente personaliza TodoItem */}
      {todo.done ? null : (
        <li className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{todo.description}</span>
          <button className="btn btn-primary">Listo</button>
          <button className="btn btn-danger">Borrar</button>
        </li>
      )}
    </>
  );
};
