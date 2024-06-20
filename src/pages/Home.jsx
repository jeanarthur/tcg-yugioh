import Header from "../components/Header";
import Slider from "../components/Slider";

import YGODB from "../YGODB";
import { useEffect, useState } from "react";

function Home() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        YGODB.getCardCollection(setCards);
    }, []);

    return (
        <>
            <div className="bg-black text-white h-screen overflow-auto">
                <Header></Header>
                <Slider images={
                    cards.map(x=>x.image)
                        .slice(0, Math.floor(cards.map(x=>x.image).length / 2))
                        .concat(Array(Math.max(0, 9 - Math.floor(cards.map(x=>x.image).length / 2)))
                        .fill('/cards/backcard.png'))
                    }
                ></Slider>
                <Slider reverse={true} images={
                    cards.map(x=>x.image)
                        .slice(Math.floor(cards.map(x=>x.image).length / 2), cards.map(x=>x.image).length)
                        .concat(Array(Math.max(0, 9 - Math.floor(cards.map(x=>x.image).length / 2)))
                        .fill('/cards/backcard.png'))
                    }
                ></Slider>
            </div>
        </>
    );
}

export default Home;
