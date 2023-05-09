

export const fileUpload = async( file ) => {

    if( !file ) throw new Error('No se ha subido ningun archivo.');
    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dt0uszg9d/upload';

    const formData = new FormData();
    formData.append('upload_preset' , 'react-journal'); 
    formData.append('file' , file )

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        
        if( !resp.ok ) throw new Error('No se pudo subir la imágen.')

        const cloudResp = await resp.json(); 
        
        return cloudResp.secure_url

    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }


}