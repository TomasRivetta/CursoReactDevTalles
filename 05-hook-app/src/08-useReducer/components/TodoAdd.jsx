import { useForm } from "../../hooks/index";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime() + 100,
      description: description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm()
  };

  return (
    <>
      {/*Componente: TodoAdd onNewTodo(todo) */}
      {/* {id:new Date().., description: '',done:false} */}
      <form onSubmit={handleSubmit}>
        <input
          id="descripcion"
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          value={description}
          onChange={onInputChange}
          name="description"
        />

        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
      {/*Fin Componente: TodoAdd */}
    </>
  );
};
