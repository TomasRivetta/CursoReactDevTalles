import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("pruebas en 11-async-await", () => {
  test("getImagen debe retornar un URL de la imagen", async () => {
    const response = await getImagen();

    //En caso de que no funcione la url
    //expect(response).toBe("No se encontro la imagen");

    expect(typeof response).toBe("string");
  });
});
