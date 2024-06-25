import React from 'react';
import { useParams } from 'react-router-dom';
import './Logement.scss';
import ErrorPage from '../ErrorPage/ErrorPage';
import etoileRouge from '../../assets/img/star-rate.svg';
import etoileGrise from '../../assets/img/star-null.svg';
import logementsData from '../../data/logements.json';
import Collapse from '../Collapse/Collapse'; // Importez le composant Collapse

const LogementHeader = ({ title, location }) => (
  <div className="logement-header">
    <h2 className="logement-header__title">{title}</h2>
    <p className="logement-header__location">{location}</p>
  </div>
);

const Host = ({ name, picture }) => (
  <div className="host-div">
    <p className="host__name">{name}</p>
    <img className="host__img" src={picture} alt={name} />
  </div>
);

const Tags = ({ tags }) => (
  <ul>
    {tags.map((tag, index) => (
      <li className="logement-ts__tags" key={index}>{tag}</li>
    ))}
  </ul>
);

const Stars = ({ rating }) => {
  const stars = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? etoileRouge : etoileGrise}
        alt={i <= rating ? 'etoileRouge' : 'etoileGrise'}
      />
    );
  }

  return <div className="logement-ts__stars">{stars}</div>;
};

const LogementContent = ({ description, equipments }) => (
  <div className='logement-content'>
    <Collapse title="Description">
      <p className="logement-content__desc">{description}</p>
    </Collapse>
    <Collapse title="Equipements">
      <ul>
        {equipments.map((equipment, index) => (
          <li className="logement-content__equipements" key={index}>{equipment}</li>
        ))}
      </ul>
    </Collapse>
  </div>
);

const Logement = () => {
  const { id } = useParams();
  const logement = logementsData.find(logement => logement.id === id);

  if (!logement) {
    return <ErrorPage />;
  }

  const { title, location, host, rating, tags, description, equipments } = logement;

  return (
    <div className="logement-container">
      <div className="logement-header-host">
        <LogementHeader title={title} location={location} />
        <Host name={host.name} picture={host.picture} />
      </div>
      <div className='logement-ts'>
        <Tags tags={tags} />
        <Stars rating={rating} />
      </div>
      <LogementContent description={description} equipments={equipments} />
    </div>
  );
};

export default Logement;
