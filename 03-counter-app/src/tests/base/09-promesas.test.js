import { getHeroeByIdAsync } from "../../../../02-intro-javascript/src/bases/09-promesas";
import heroes from "../../../../02-intro-javascript/src/data/heroes";

describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync Debe retornar un héroes async ', (done) => {

        const id = 1;

        getHeroeByIdAsync(id) 
         .then ( heroe => {

            expect( heroe ).toBe( heroes[0] );
            done();
        });  
    });
    test('Debe otener un error en caso de que el héroe no exista ', (done) => {
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error =>{
                expect( error  ).toBe('No se ha encontrado el heroe');
                done();


            } )
    })
    
})
