import { getHeroesById, getHeroesByOwner } from "../../../../02-intro-javascript/src/bases/08-imp-exp";
import heroes from "../../../../02-intro-javascript/src/data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('debe de retornar un heroe por ID', () => {
        
        const id = 1;
        const heroe = getHeroesById(id);
        

        const heroeData = heroes.find(h => h.id === id);
        expect( heroe).toEqual( heroeData)
    });
    test('debe de retornaar un udnefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroesById( id );
        

        expect( heroe ).toBe( undefined )
    });

    // debe retornar un arreglo con los héroes de DC
     //toEqual al arreglo filtrado

    test('debe retornar un arreglo con los héroes de DC', () => {
        
        const owner = 'DC' ;
        const ownerArr = getHeroesByOwner( owner );
        
        const heroesData = heroes.filter( h => h.owner === owner);

        expect( heroesData ).toEqual( ownerArr );
    });

    //debe retornar un arreglo con los heroes de Marvel
    //length = 2 //toBe

    test('debe retornar un arreglo con los héroes de Marvel', () => {
        
        const owner = 'Marvel' ;
        const ownerArr = getHeroesByOwner( owner );
        
        expect( ownerArr.length ).toBe( 2 );
    });

    test('Que ocurre si mandamos un owner que no existe', () => {
        
        const id = undefined ;
        const ownerArr = getHeroesById( id );
        
        expect( ownerArr ).toBe( undefined );
    });





})

