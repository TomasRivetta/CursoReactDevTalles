    //TITULO DE LA PRUEBA
test('TITULO DE PRUEBA', () => {

    //! Si no lanza error la consola es porque paso
    if (0 === 1) {
        throw new Error('No puede dividir entre 0');
    }
})