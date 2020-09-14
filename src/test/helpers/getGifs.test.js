import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs',()=>{
    
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 10 );
    })

    test('devuelve un array vacio', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    })
    
    

})