import React, { useEffect, useState } from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Cards from '../../components/Cards/Cards';
import { Link } from "react-router-dom";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <HomeBanner />
            <div className="cards-container">
                {data.map((appart, id) => (
                    <div className="card_logement" key={id}>
                        <Link className="link_card_logement" to={`/logement/${appart.id}`}>
                            <Cards cover={appart.cover} title={appart.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
