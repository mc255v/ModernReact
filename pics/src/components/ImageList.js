import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map( image => {
        // best to put key on the root element being rendered 
        return <ImageCard key={image.id} image={image}/>
    });
    
    return <div className="image-list">{images}</div>;
}

export default ImageList;