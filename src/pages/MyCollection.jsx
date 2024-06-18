import Header from "../components/Header";
import { useEffect, useState } from "react";

import YGODB from "../YGODB";
import Filter from "../components/Filter";

function MyCollection(){

    const [cards, setCards] = useState();
    const [filteredCards, setFilteredCards] = useState();
    const [page, setPage] = useState(0);

    if (!cards){
        YGODB.getCardCollection(setCards);
    }

    useEffect(() => {
        setFilteredCards(cards);
    }, [cards]);

    useEffect(() => {
        if (filteredCards?.length === 0){
            setFilteredCards(cards);
        }
    }, [filteredCards])

    return(
        <>
        <div className="bg-black text-white h-screen">
            <Header></Header>
            {
                filteredCards?.length > 0 && <Filter elements={cards} attribute="type" outCallback={setFilteredCards} />
            }
            <br />
            <div className="grid grid-cols-4 gap-4 justify-center items-center">
                {
                    filteredCards && filteredCards.slice(page, page + 18).map((card) => 
                        <img className="h-64 m-auto" key={card?.id} src={card?.image} alt={card?.name}/>
                    )
                }
            </div>
            {
                filteredCards?.length == 0 && <h2>Coleção vazia</h2>
            }
            <br />
            <button onClick={()=>{setPage(page >= 18 ? page - 18 : 0)}}>Anterior</button>
            <br />
            <button onClick={()=>{setPage(page + 18 <= filteredCards?.length ? page + 18 : page)}}>Próximo</button>
        </div>
        </>
    )
}

export default MyCollection;