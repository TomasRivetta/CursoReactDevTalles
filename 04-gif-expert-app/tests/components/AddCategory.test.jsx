import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");

    //screen.debug();
  });

  test("Debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";

    //UNA FUNCION MARCADA COMO UN MOCK, UNA SIMULACION DE LA FUNCION
    const onNewCategory = jest.fn();

    //Sujeto de pruebas
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //Cambiar valor de caja de texto
    fireEvent.input(input, { target: { value: inputValue } });

    fireEvent.submit(form);

    //screen.debug();

    expect(input.value).toBe("");

    // Analizar si la funcion fue llamada
    expect(onNewCategory).toHaveBeenCalled();
    //Para que la funcion haya sido llamada solo una vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);

    //Que haya sido llamada con el valor de nuestra caja de texto
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe de llamar el onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    //Que se haya llamado 0 veces
    expect(onNewCategory).toHaveBeenCalledTimes(0);

    //Que no haya sino llamado la funcion
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
