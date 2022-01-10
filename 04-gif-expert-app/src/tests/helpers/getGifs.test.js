import { GetGifs } from "../../helpers/GetGifs"


describe('Pruebas con getGif Fetch', () => {

    test('Debe traer 10 elementos', async() => { // funcion async

        const gifs = await GetGifs('One Punch');//recuperamos los gifs con la función

        expect( gifs.length ).toBe(10)//esperadmos que los elementos sea igual a 10
    })
 
})
