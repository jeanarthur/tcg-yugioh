import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import YGODB from "../YGODB";
import YGOApi from '../YGOApi';

function Shop(){

    const [cards, setCards] = useState([]);
    const [rndCard, setRndCard] = useState();
    const [hasAllCollected, setHasAllCollected] = useState(true);

    function getCard(){
        YGOApi.getRandomCard(setRndCard);
    }

    function getPack(){
        setHasAllCollected(false);
        setCards([]);
        for (let i = 0; i < 4; i++) {
            getCard();
        }
    }

    function addToCollection(card) {
        if (!card.collected) {
            YGODB.postCardInCollection(card);
            card.collected = true;
        }

        if (cards.filter((c)=>c.collected).length === cards.length){
            setHasAllCollected(true);
        }
    }

    useEffect(() => {
        if (rndCard){
            setCards(cards.concat(rndCard));
        }
    }, [rndCard]);

    return(
        <>
            <h1>Loja</h1>
            <Link to={'/'}>Página inicial</Link>
            <br />
            {
               hasAllCollected && <button onClick={getPack}>Obter pacote</button>
            }
            {
                cards?.length > 0 && cards.map((card, i) =>
                    <>
                        <img 
                            style={{width: 200+'px', height: 'auto'}} 
                            key={card?.id} 
                            src={"/cards/backcard.png"}
                            alt={card?.name}
                            onClick={((event)=>{
                                event.target.src = card?.image;
                                addToCollection(card);
                            })}
                        />
                    </>
                )
            }
        </>
    )
}

export default Shop;