import React, { useEffect, useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import './addimagecard.scss';

const AddImageCard = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.items[0].getAsFile();
    if (file) {
      handleFileSelect(file);
    }
    setIsDragging(false);
  };

  const handleFileSelect = (file: File) => {
    // handle selected files
    console.log(file);
  };

  return (
    <div
      className={`addimagecard ${isDragging ? ' dragging-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label htmlFor="image-upload" className="addimagecard__imageInput">
        <BiImageAdd className="addimagecard__imageInput--icon" />
        <span className="addimagecard__imageInput--text">
          Drag & Drop an image here, or click to browse
        </span>
      </label>
      <input type="file" id="image-upload" accept="image/*" />
      
    </div>
  );
};

export default AddImageCard;
