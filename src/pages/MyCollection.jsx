import { Link } from "react-router-dom";
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
            <h1>Minha Coleção</h1>
            <Link to={'/'}>Página inicial</Link>
            <br />
            {
                filteredCards?.length > 0 && <Filter elements={cards} attribute="type" outCallback={setFilteredCards} />
            }
            <br />
            {
                filteredCards && filteredCards.slice(page, page + 18).map((card) => 
                    <img style={{width: 200+'px', height: 'auto'}} key={card?.id} src={card?.image} alt={card?.name}/>
                )
            }
            {
                filteredCards?.length == 0 && <h2>Coleção vazia</h2>
            }
            <br />
            <button onClick={()=>{setPage(page >= 18 ? page - 18 : 0)}}>Anterior</button>
            <br />
            <button onClick={()=>{setPage(page + 18 <= filteredCards?.length ? page + 18 : page)}}>Próximo</button>
        </>
    )
}

export default MyCollection;