import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("06-deses-obj tests", () => {
  test("test Tarea similar al 05", () => {
    const clave = "Toto";
    const edad = 21;

    const userResult = usContext({ clave, edad });

    expect(userResult).toStrictEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
