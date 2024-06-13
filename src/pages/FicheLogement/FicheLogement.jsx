import React from 'react';
import { useParams } from 'react-router-dom';
import Logements from '../../components/Logement/Logement'
import Carousel from '../../components/Carousel/Carousel'; // Assurez-vous que le chemin est correct
import logements from '../../data/logements.json'; // Assurez-vous que le chemin est correct

const FicheLogement = () => {
  const { id } = useParams(); // Obtenir l'ID du logement à partir des paramètres de l'URL
  const logement = logements.find(logement => logement.id === id); // Trouver le logement par ID

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      {/* Passer les images au composant Carousel */}
      <Carousel slides={logement.pictures}/>
      <Logements/>
    </div>
  );
};

export default FicheLogement;
