import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom'


describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach( ()=>{

        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    });

    test('Debe mostrarse correctamente', () => {


        expect(wrapper).toMatchSnapshot();

    })

    test('Debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: { value: value }});

        expect( wrapper.find('p').text().trim()).toBe( value );
    })

    test('NO debe de postear la información con submit', () => {

            wrapper.find('form').simulate('submit', { preventDefault(){} })// encuentrame un formulario y simulame la acción de submit

            expect( setCategories ).not.toHaveBeenCalled()


    })

    test('Debe llamar a setCategories y limpiar la caja de texto', () => {
        
        const value = 'Overwatch';
        const input = wrapper.find('input');
 
        input.simulate('change', { target : { value } });
        
 
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenLastCalledWith( expect.any(Function) );
 
        expect( input.prop('value')).toBe('');
        
        

    })
    
    
    
})
