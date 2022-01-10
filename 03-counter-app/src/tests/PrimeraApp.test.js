import React from 'react';
import {shallow} from "enzyme";
import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";


describe('pruebas en <PrimeraApp>', () => {

    test('Debe mostar <primeraApp> correctamente', () => {
        const saludo = "Hola, Soy Goku";
        const wrapper = shallow( <PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostar el subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Soy un articulo';

        const wrapper = shallow(
             <PrimeraApp 
                saludo={ saludo }
                subTitulo={ subTitulo }
             />
        );
            const textoParrafo = wrapper.find('p').text();

            expect(textoParrafo).toBe(subTitulo);


    })    
    
});
