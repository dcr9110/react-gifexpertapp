import '@testing-library/jest-dom';
import { wait } from '@testing-library/react';
const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../../hooks/useFetchGifs");


describe('Prueba en el hook useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect( data ).toEqual( [] );
        //comprueba que el valor sea True
        expect( loading ).toBeTruthy();

    })

    test('Debe retornar un arreglo de imgs y loading en false ', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        //comprueba que el valor sea True
        expect( loading ).toBeFalsy();
        

    })
    
    
})
