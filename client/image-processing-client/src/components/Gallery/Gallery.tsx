import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from '../ImageCard/ImageCard';
import AddImageCard from '../AddImageCard/AddImageCard';
import './gallery.scss';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/full');
        setImages(response.data);
      } catch (error) {
        console.error('Failed to fetch images', error);
      }
    };
    getImages();
  }, []);

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
      <AddImageCard />
    </div>
  );
};

export default Gallery;
