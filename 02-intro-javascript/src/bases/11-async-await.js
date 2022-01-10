//async await

// const getImagenPromesa = () =>  new Promise(resolve => resolve ('https://www.google.com'));

// getImagenPromesa().then(console.log)

export const getImagen = async ()=>{
    try {
        const apiKey = 'sLQnWIvyjV5bny8hX0gNVYJJVHBrvjuh';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        console.log(data);
    
        const {url} = data.images.original;
        
        return url;
    } catch (error) {
        alert('Se ha producido un error al cargar la imagen');
        console.error(error);
        return 'No existe!';
    }

    
}

getImagen();
