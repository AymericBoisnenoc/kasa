import React, { useEffect, useState } from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Cards from '../../components/Cards/Cards';
import { Link } from "react-router-dom";
import Logements from '../../data/logements.json'

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Logements)
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
