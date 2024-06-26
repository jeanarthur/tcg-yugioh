import { useEffect, useState } from "react";

import YGODB from "../YGODB";
import YGOApi from '../YGOApi';
import Header from "../components/Header";

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
        <div className="bg-black text-white h-screen overflow-auto">
            <Header></Header>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-center items-center mt-4">
                {
                    cards?.length > 0 && cards.map((card, i) =>
                        <>
                            <img className={`h-64 m-auto ${card?.collected ? "" : "cursor-pointer"}`}
                                key={card?.id + `_${i}`}
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
            </div>
            {
               hasAllCollected && 
               <div className="w-full flex justify-center px-20 pb-6 bottom-0 fixed bg-black h-fit">
                <button className="text-white m-4
                    flex justify-center uppercase px-3 py-2 text-sm font-regular rounded-xl
                    hover:text-black border
                    border-white hover:bg-white focus:ring-4 focus:outline-none
                    focus:ring-white font-medium text-center me-2 mb-2 transition duration-300"
                    onClick={getPack}>Abrir pacote
                </button>
               </div>
            }
        </div>
        </>
    )
}

export default Shop;