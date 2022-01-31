export const getGifs = async (category) =>{


    const limit = '5';
    const apiKey = 'SkJTp8xZyTsKLr8S2UTW7tHySrnog6Fs'
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}







