import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

//Mockeo el fetch
jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    Counter: 1,
    increment: mockIncrement,
  });

  //Antes de cada prueba
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: true });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Información de Pokemon"));

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test("Debe de mostrar un pokemon", () => {
    useFetch.mockReturnValue({
      data: [
        {
          name: "Toto",
          sprites: {
            front_default: "src",
            front_shiny: "src",
            back_default: "src",
            back_shiny: "src",
          },
        },
      ],
      isLoading: false,
      hasError: true,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Toto")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("Debe de llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [
        {
          name: "Toto",
          sprites: {
            front_default: "src1",
            front_shiny: "src2",
            back_default: "src3",
            back_shiny: "src4",
          },
        },
      ],
      isLoading: false,
      hasError: true,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
