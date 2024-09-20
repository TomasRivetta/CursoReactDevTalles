export const TodoAdd = () => {
  const onNewTodo = (event, descripcion) => {
    event.preventDefault();
    console.log(descripcion);
    console.log(descripcion.target.value);
  };

  const descripcion = document.querySelector("#descripcion");

  return (
    <>
      {/*Componente: TodoAdd onNewTodo(todo) */}
      {/* {id:new Date().., description: '',done:false} */}
      <h4>Agregar Todo</h4>
      <hr />
      <form>
        <input
          id="descripcion"
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-1"
          onClick={(event, desc) => onNewTodo(event, desc)}
        >
          Agregar
        </button>
      </form>
      {/*Fin Componente: TodoAdd */}
    </>
  );
};
