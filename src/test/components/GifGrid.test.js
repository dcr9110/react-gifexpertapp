import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas con el componente <GifGrid/>', () => {
    
    const category = 'samurai';
    
    test('Tiene que mostrar correctamente el componente', () => {
    
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={category}/> );
        expect( wrapper ).toMatchSnapshot();
    
    })

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost.jpg',
            title: 'cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect( wrapper ).toMatchSnapshot();
        //revisa que el componente no contenga el elemento de cargadon
        expect( wrapper.find('h2').exists() ).toBe( false );
        //revisa el tamaño del componente
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    
    
})
