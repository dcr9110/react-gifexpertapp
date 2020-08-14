export const getGifs = async( category ) =>{
        
    const apiKey = 'KKRMP4kZxWop6pbdjPKG5huvhNVtiQfD';

    const cantidad = 10;

    const peticion = 'https://api.giphy.com/v1/gifs/search';

    const resp = await fetch(`${ peticion }?api_key=${ apiKey }&q=${ encodeURI(category) }&limit=${ cantidad }`);

    const { data } = await resp.json();

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return (gifs);
};