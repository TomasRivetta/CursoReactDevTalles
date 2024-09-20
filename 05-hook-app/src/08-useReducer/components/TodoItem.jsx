export const TodoItem = ({ id, description, done }) => {
  return (
    <>
      {/* Crear un componente personaliza TodoItem */}
      {done ? null : (
        <li id={id} className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{description}</span>
          <button className="btn btn-primary">Listo</button>
          <button className="btn btn-danger">Borrar</button>
        </li>
      )}
    </>
  );
};
