/* eslint-disable no-undef */
import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("pruebas en 08-imp-exp ", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const id = 1;

    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById debe retornar undefined si no existe el ID", () => {
    const id = 100;

    const hero = getHeroeById(id);

    //FORMA DE EVALUAR SI ES NULL, UNDEFINED O FALSE
    expect(hero).toBeFalsy();
  });

  //TAREA: getHeroesByOwner
  //Tarea:

  //Debe de retonar un arreglo con los heros de DC
  // Length === 3
  // toEqual al arreglo filtrado
  test("getHeroesByOwner Debe de retonar un arreglo con los heros de DC", () => {
    const owner = "DC";

    const heroesDC = getHeroesByOwner(owner.toUpperCase());

    expect(heroesDC.length).toBe(3);

    //FORMA 1 - NO ESTA BUENA PARA UN FUTURO
    expect(heroesDC).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);

    //FORMA 2 - ESTA BUENA POR SI EN UN FUTURO AÑADEN MAS HEROES
    expect(heroesDC).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  //debe retornar un arreglo con los heroes de Marvel
  //length === 2
  test("getHeroesByOwner Debe de retonar un arreglo con los heros de DC", () => {
    const owner = "Marvel";

    const heroesMarvel = getHeroesByOwner(owner);

    expect(heroesMarvel.length).toBe(2);
    expect(heroesMarvel).toEqual(
      heroes.filter((heroe) => heroe.owner === owner)
    );
  });
});
