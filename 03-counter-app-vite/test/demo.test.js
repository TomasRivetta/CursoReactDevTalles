
//Agrupar test
describe('Pruebas en <DemoComponent />', () => {

    //TITULO DE LA PRUEBA
    test('TITULO DE PRUEBA', () => {


        // 1. Inicializacion
        const message1 = 'Hola mundo'

        // 2. Estimulo
        const message2 = message1.trim();

        // 3. Observar el comportamiento... esperado
        // mensaje 1 es igual a mensaje 2
        expect(message1).toBe(message2)

    })
})
