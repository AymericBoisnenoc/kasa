import React from 'react';
import Carousel from '../Carousel/Carousel';
import ErrorPage from '../ErrorPage/ErrorPage'
import logementsData from '../../data/logements.json'; // Importez les données depuis logements.json

export default function Logement({ id }) {
  // Recherchez le logement correspondant dans les données
  const logement = logementsData.find(logement => logement.id === id);

  // Assurez-vous que le logement existe avant de l'afficher
  if (!logement) {
    return <ErrorPage/>;
  }

  // Extrayez les données du logement
  const { title, description, host, rating, location, equipements, tags } = logement;

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
