import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import ErrorPage from '../ErrorPage/ErrorPage'
import etoileRouge from '../../assets/img/star-rate.svg'
import etoileGrise from '../../assets/img/star-null.svg'
import logementsData from '../../data/logements.json'; // Importez les données depuis logements.json

const Logement = () => {

  // Recherchez le logement correspondant dans les données
  const { id } = useParams();
  const logement = logementsData.find(logement => logement.id === id);
  const host = logement.host
  const stars = []
  const totalStars = 5
  const rating = logement.rating

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<img key={i} src={etoileRouge} alt="etoileRouge" />);
    } else {
      stars.push(<img key={i} src={etoileGrise} alt="etoileGrise" />);
    }
  }
  
  // Assurez-vous que le logement existe avant de l'afficher
  if (!logement) {
      return <div>
      <ErrorPage/>;
    </div>
    }

    
    // Extrayez les données du logemen
    
    return (
      <div>
        <Carousel />
        <h2>{logement.title}</h2>
        <p>{logement.description}</p>
        <div>
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
        <div>
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
        <p>{logement.location}</p>
        <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
        <ul>
          {logement.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
            ))}
        </ul>
      </div>
    );   
}
export default Logement;