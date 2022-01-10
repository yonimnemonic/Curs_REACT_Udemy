describe('Pruebas en el archivo demo.test.js', () => {
        test('deben de ser iguales los dos strings ', () => {
        //1. inicialización
        const mensaje = 'Hola Mundo'
        //2. estimulo

        const mensaje2 = `Hola Mundo`
        //3 . comportammiento

        expect( mensaje  ).toBe( mensaje2 ); //===
    })
})



