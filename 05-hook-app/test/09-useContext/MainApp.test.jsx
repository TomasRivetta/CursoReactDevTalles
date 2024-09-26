const { render, screen } = require("@testing-library/react");
const { MainApp } = require("../../src/09-useContext/MainApp");
const { MemoryRouter } = require("react-router-dom");

describe("Pruebas en el componente <MainApp/>", () => {
  test("Debe de mostrar el HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
    // screen.debug();
  });

  test("Debe de mostrar el LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPage")).toBeTruthy();
    // screen.debug();
  });
});
