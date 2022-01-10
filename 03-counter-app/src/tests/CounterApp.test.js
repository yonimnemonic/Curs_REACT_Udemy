/*1. Crear las siguientes pruebas para el counterApp
    *Debe mostrar CounterApp correctamente (hacer match con un snapshot)
y sus valores por defecto.
* Debe de mostrar el valor por defecto de 100
        *usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
 */

import React from 'react';
import {shallow} from "enzyme";
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp'

describe('Pruebas en counterApp', () => {
  let wrapper = shallow(<CounterApp />);;

  beforeEach(()=>{

    wrapper = shallow(<CounterApp />);
})

    test('Se de be mostrar correctament y hace mutch con la APP ', () => {


        expect(wrapper).toMatchSnapshot();
        })

        test('Debe mostrar el valor por defecto 100 ', () => {

        const wrapper = shallow(<CounterApp value={100}/>);
        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('100');
        }) 
        
    test('Debe incrementar contador con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('101');
        })
    
    test('Debe decrementar contador con el boton en -1', () => {
        const wrapper = shallow(<CounterApp/>);
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('99');
        })

    test('Debe colocar el valor por defecto con el btn reset ', () => {
        const wrapper = shallow(<CounterApp value={ 105 } />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);
        expect(counterText).toBe('105');
    }) 
        
})

