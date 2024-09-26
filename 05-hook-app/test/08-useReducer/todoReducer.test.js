import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Nuevo Todo",
      done: false,
    },
  ];

  test("Debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test("Debe de agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payLoad: {
        id: 1,
        description: "Nuevo todo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payLoad);
  });

  test("Debe de eliminar un TODO", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payLoad: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test("Debe de realizar el Toggle del todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payLoad: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBeTruthy();
  });
});
