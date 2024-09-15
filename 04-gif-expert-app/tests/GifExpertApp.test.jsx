/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el título de la aplicación", () => {
    render(<GifExpertApp />);

    //Comprobamos que el titulo del componente se muestre
    expect(screen.getByText("GifExpertApp")).toBeTruthy();
  });

  test("debe agregar una nueva categoría", () => {
    render(<GifExpertApp />);

    //Traemos la etiqueta input
    const input = screen.getByRole("textbox");
    //Traemos la etiqueta form
    const form = screen.getByRole("form");
    //Simulamos el evento input con el valor Dragon Ball
    fireEvent.input(input, { target: { value: "Dragon Ball" } });
    //Simulamos el evento submit del form donde va a enviar el contenido del input de arriba
    fireEvent.submit(form);

    //Comprobamos que en el componente se muestre Dragon Ball
    expect(screen.getByText("Dragon Ball")).toBeTruthy();
  });

  test("no debe agregar una categoría repetida", () => {
    render(<GifExpertApp />);

    //Traemos la etiqueta input
    const input = screen.getByRole("textbox");

    //Traemos la etiqueta form
    const form = screen.getByRole("form");

    //Simulamos el evento input con el valor One Punch
    fireEvent.input(input, { target: { value: "One Punch" } });

    //Simulamos el evento submit del form donde va a enviar el contenido del input de arriba
    fireEvent.submit(form);

    // No debe añadir 'One Punch' de nuevo ya que es duplicada
    //Traemos todas las categorias que estan definidas en un H de nivel 3 osea h3
    const categories = screen.getAllByRole("heading", { level: 3 });
    //Comparamos que la cantidad de categorias que traemos sea igual a 1 ya que no deberia agregarse la otra porque ya existe
    expect(categories.length).toBe(1); // Solo debe haber una categoría (One Punch)
  });
});
