import React from 'react';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';
const { shallow } = require("enzyme");

describe('Pruebas con <AddCategory/>', () =>{

    const setCategory = jest.fn();
    let wrapper = shallow( <AddCategory setCategorias={ setCategory }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorias={setCategory} />);
    })

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';

        input.simulate('change', {target: { value } });
    })

    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategory ).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';

        //1. simular el inputChange
        input.simulate('change', { target: { value } });
 
        //2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        //3. setCategories se debe de haber llamado
        expect( setCategory ).toHaveBeenCalled();
        // se llamo una vez
        expect( setCategory ).toHaveBeenCalledTimes(1);
        //se llamo una funcion
        expect( setCategory ).toHaveBeenCalledWith( expect.any(Function) );

        //4. el valor del input debe de ser ''
        expect( input.props().value ).toBe('');

    })
    
    
    
})