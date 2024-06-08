import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/logements.json");
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des images:', error);
      }
    };

    fetchImages();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="carousel">
      <div id="slides">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.url} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        Précédent
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        Suivant
      </button>
    </div>
  );
};

export default Carousel;
