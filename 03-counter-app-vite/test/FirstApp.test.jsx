/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  // test("Debe de hacer match con el snapshot", () => {
  //   const title = "Hola, Soy goku";

  //   const { container } = render(<FirstApp title={title} />);

  //   //console.log(container);

  //   expect(container).toMatchSnapshot();
  // });

  test("Debe de mostrar el titulo en un h1", () => {
    const title = "Hola, Soy goku";

    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    //Que se encuentre el texto, osea si existe
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    // SI EXISTE CON ESTE DATA ATRIBUTE
    expect(getByTestId("test-title")).toBeTruthy();

    //toBe le importa hasta los espacios, en cambio el toContain solo el contenido
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola, Soy goku";
    const subTitle = "Soy un subtitulo";

    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    // El gerAllByText devuelve un arreglo
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
