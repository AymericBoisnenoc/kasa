import React from 'react';
import Carousel from '../Carousel/Carousel';

export default function Logement({ picture, title, description, host, rating, location, equipements, tags }) {
    return (
      <div>
          <Carousel />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{host}</p>
        <p>{rating}</p>
        <p>{location}</p>
        <ul>
          {equipements && equipements.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
        <ul>
          {tags && tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    );
}
