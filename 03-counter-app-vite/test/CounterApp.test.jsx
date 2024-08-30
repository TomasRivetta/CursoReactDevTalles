import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

/* eslint-disable no-undef */
describe("Pruebas en el <CounterApp/>", () => {
  const value = 10;

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el valor inicial de 100 <CounterApp value={100}/>", () => {
    render(<CounterApp value={100} />);

    expect(screen.getByText(100)).toBeTruthy();

    // expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
    //   '100'
    // );
  });

  test("Debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);

    //Disparar evento, el screen.getByText busca el nodo que tenga lo pasado entre parentesis
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy;
  });

  test("Debe de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);

    //Disparar evento
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy;
  });

  test("Debe de funcionar el boton de reset", () => {
    render(<CounterApp value={value} />);
    //Disparar evento, simular el evento, realiza la suma
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    //Disparar evento, tomando el boton por el aria-label
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    //Tomando el boton por el aria-label
    //screen.getByRole('button', {name: 'btn-reset'})
    expect(screen.getByText("10")).toBeTruthy;
  });
});
