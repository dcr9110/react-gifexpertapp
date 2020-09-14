import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
const { shallow } = require("enzyme");

describe('Pruebas en <GifGridItem/>', ()=>{

    const title = 'un titulo';
    const url = "https://localhost/hola.jpg";
    const wrapper = shallow( <GifGridItem   
        title = {title} 
        url = {url}
        /> );
 
    test('debe de mostrar el componente correctamente',()=>{

        expect( wrapper ).toMatchSnapshot();
  
    })

    test('debe tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        
        expect( p.text().trim() ).toBe( title ); 

    })
    

    test('debe tener la imagen igual al url y alt de los props ', () => {
        
        const img = wrapper.find('img');
        
        expect( img.props().src ).toBe( url );
        expect( img.props().alt ).toBe( title );
        
    })
    
    test('debe tener la clase animate__jello', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes( 'animate__jello' ) ).toBe( true );

    })
    
})