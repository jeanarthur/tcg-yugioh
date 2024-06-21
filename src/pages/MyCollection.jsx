import Header from "../components/Header";
import { useEffect, useState } from "react";

import YGODB from "../YGODB";
import Filter from "../components/Filter";

function MyCollection() {

    const [cards, setCards] = useState();
    const [filteredCards, setFilteredCards] = useState();
    const [page, setPage] = useState(0);

    if (!cards) {
        YGODB.getCardCollection(setCards);
    }

    useEffect(() => {
        setFilteredCards(cards);
    }, [cards]);

    useEffect(() => {
        if (filteredCards?.length === 0) {
            setFilteredCards(cards);
        }
    }, [filteredCards])

    return (
        <>
            <div className="bg-black text-white h-screen overflow-auto">
                <Header></Header>
                {
                    filteredCards?.length > 0 && <Filter elements={cards} attribute="type" outCallback={setFilteredCards} />
                }
                <br />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center items-center mb-32">
                    {
                        filteredCards && filteredCards.slice(page, page + 12).map((card) =>
                            <img className="h-64 m-auto" key={card?.id} src={card?.image} alt={card?.name} />
                        )
                    }
                </div>
                {
                    filteredCards?.length == 0 && <h2 className="text-xl text-center">Coleção vazia</h2>
                }
                {
                    filteredCards?.length > 0 &&
                    <div className="w-full flex justify-between px-20 bottom-0 fixed bg-black h-24 items-center">
                        <a onClick={() => { setPage(page >= 18 ? page - 18 : 0) }}
                            className="inline-flex items-center border border-white px-3 py-1.5 rounded-md text-white hover:bg-white hover:text-black cursor-pointer transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                                </path>
                            </svg>
                            <span className="ml-1 font-bold text-lg">Anterior</span>
                        </a>
                        <a onClick={() => { setPage(page + 18 <= filteredCards?.length ? page + 18 : page) }}
                            className="inline-flex items-center border border-white px-3 py-1.5 rounded-md text-white hover:bg-white hover:text-black cursor-pointer transition duration-300">
                            <span className="mr-1 font-bold text-lg">Próximo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                                </path>
                            </svg>
                        </a>
                    </div>
                }
            </div>
        </>
    )
}

export default MyCollection;