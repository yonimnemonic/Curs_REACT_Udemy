import { shallow } from "enzyme";
import react from "react";
import { GifGridItem } from "../../components/GifGridItem";


describe('Pruebas en  <GifGridItem />', () => {

  const title = 'Papito';
  const url = 'https://localhost/ed.jpg'
  const wrapper = shallow( <GifGridItem title={title} url={url} />);

  test('Se debe renderizar correctamente', () => {
    
     expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un párrafo con el title', () => {
    
    const p = wrapper.find('p');
    expect( p.text().trim()).toBe( title );
  });

  test('Debe tener la imagen igual al URL de los props', () => {
     const img = wrapper.find('img');
     console.log( img.prop('src') )
     expect(img.prop('src')).toBe(url);
     expect(img.prop('alt')).toBe(title);

  });
  test('Debe tener animate_fadeIn', () => {
    const div= wrapper.find('div');
    const className = div.prop('className');
    
    expect(className.includes('animate_fadeIn')).toBe(false);
    
  });
  
  
  
});

