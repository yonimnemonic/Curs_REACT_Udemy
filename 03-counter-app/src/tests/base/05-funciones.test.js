import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../../../02-intro-javascript/src/bases/05-funciones';


describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', ()=>{
        
        const userTest = 
        {
            uid: 'ABC123',
            username: 'PapiChulo',
        }

        const user = getUser();
        expect(user).toEqual(userTest);

    })

    //getUserActivo debe retonar un objeto

    test('getUserActivo debe retornar un objeto', ()=>{
        const nombre = 'Agus';
        const user = getUsuarioActivo(nombre);
            expect(user).toEqual({
                uid: 'ABC54',
                username: nombre
            }
        );
    })
})

 





