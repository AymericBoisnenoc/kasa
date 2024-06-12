import React, { useState, useEffect } from 'react';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Collapse from '../../components/Collapse/Collapse';
import aboutData from '../../data/About.json';

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Ici, nous simulons une récupération des données en utilisant un import direct.
    setData(aboutData);
  }, []);

  return (
    <div>
      <AboutBanner />
      <h2>À propos</h2>
      {data.map((item, index) => (
        <Collapse key={index} title={item.aboutTitle}>
          <p>{item.aboutText}</p>
        </Collapse>
      ))}
    </div>
  );
};

export default About;
