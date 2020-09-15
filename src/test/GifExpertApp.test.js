import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GitExpertApp } from '../GitExpertApp';

describe('Pruebas con el componente <GifExpertApp/>', () => {
    
    test('Tiene que mostrar correctamente el componente', () => {
        
        const wrapper = shallow(<GitExpertApp/>);
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar una lista de categorias', () => {

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GitExpertApp defaultCategories={categories}/> );

        expect(wrapper.find('GifGrid').length).toBe( categories.length );
    })
    

})
