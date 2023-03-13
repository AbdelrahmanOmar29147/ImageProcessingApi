import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import TopBar from '../../components/TopBar/TopBar';
import './imagepage.scss';

const ImagePage = () => {
  return (
    <div className="imagepage">
      <TopBar />
      <Gallery/>
    </div>
  );
};

export default ImagePage;
