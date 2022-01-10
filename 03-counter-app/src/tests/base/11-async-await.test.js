import { getImagen } from "../../../../02-intro-javascript/src/bases/11-async-await"

describe('Pruebas con async - await y fetch', () => {
    test('debe tetornar el url de la imagen ', async()=>{

        const url = await getImagen();
        console.log(url)

        expect( url.includes('https://')).toBe( true);
    })
})
