import { any } from "prop-types"
import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => {
    test('Debe de retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('One Punch')

        //que sea mayor a 0
        expect(gifs.length).toBeGreaterThan(0)

        //Que el primer elemento del array tenga el formato del objeto y tipo de propiedades
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

    })
})