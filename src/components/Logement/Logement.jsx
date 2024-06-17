import React from 'react';
import { useParams } from 'react-router-dom';
import './Logement.scss';
import ErrorPage from '../ErrorPage/ErrorPage';
import etoileRouge from '../../assets/img/star-rate.svg';
import etoileGrise from '../../assets/img/star-null.svg';
import logementsData from '../../data/logements.json';
import Collapse from '../Collapse/Collapse'; // Importez le composant Collapse

const Logement = () => {
  const { id } = useParams();
  const logement = logementsData.find(logement => logement.id === id);

  if (!logement) {
    return <ErrorPage />;
  }

  const host = logement.host;
  const stars = [];
  const totalStars = 5;
  const rating = logement.rating;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<img key={i} src={etoileRouge} alt="etoileRouge" />);
    } else {
      stars.push(<img key={i} src={etoileGrise} alt="etoileGrise" />);
    }
  }

  return (
    <div className="logement-container">
      <div className="logement-header-host">
        <div className="logement-header">
          <h2 className="logement-header__title">{logement.title}</h2>
          <p className="logement-header__location">{logement.location}</p>
        </div>
        <div className="host-div">
          <p className="host__name">{host.name}</p>
          <img className="host__img" src={host.picture} alt={host.name} />
        </div>
      </div>
      <div className='logement-ts'>
        <ul>
          {logement.tags.map((tag, index) => (
            <li className="logement-ts__tags" key={index}>{tag}</li>
          ))}
        </ul>
        <div className="logement-ts__stars">
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
      </div>
      <div className='logement-content'>
        <Collapse title="Description">
          <p className="logement-content__desc">{logement.description}</p>
        </Collapse>
        <Collapse title="Equipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li className="logement-content__equipements" key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Logement;
