import React from 'react';
import { Link } from 'react-router-dom';
import { BsGear } from 'react-icons/bs';
import './imagecard.scss';

type Props = {
  image: string;
};

const ImageCard: React.FC<Props> = ({ image }) => {
  return (
    <div className="imagecard">
      <img
        src={image}
        alt="card"
        className="imagecard--image"
      />
      <div className="imagecard__topLayer">
        <Link className="link imagecard__topLayer__button" to={'/processing'}>
          <BsGear className="imagecard__topLayer__button--icon" />
          <span>Process</span>
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
