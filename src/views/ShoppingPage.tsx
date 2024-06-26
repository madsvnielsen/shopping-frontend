import Banner from "../Components/Banner.tsx";
import {PokemonAPI} from "../PokemonAPI.ts";
import {useEffect, useState} from "react";
import CardList from "../Components/CardList.tsx"
import "./ShoppingPage.css";

export function ShoppingPage() {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const [loading, setLoading] = useState(true);

    const [addedCards, setAddedCards] = useState(new Set<string>()); // Set to store added card IDs

    const handleAddToCart = (cardId: string) => {
        setAddedCards(prevAddedCards => new Set(prevAddedCards).add(cardId));
    };

    async function getCards() {
        setLoading(true)
        const result = await PokemonAPI.listOfCards(currentPage);
        setCards(result);
        console.log(result);
        setLoading(false)
    }

    useEffect(() => {
        getCards();
    }, []);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
        getCards();
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
        getCards();
    };

    return (
        <div className="shopPage">
            <Banner goToBasket={true}/>
            {loading && <h1 className="Shoploading-text">Finding the best pokemon cards for you.</h1>}

            {!loading && <>
                <CardList cards={cards} currentPage={currentPage} totalPages={totalPages}
                          setIsAdded={handleAddToCart} addedCards={addedCards} setAddedCards={setAddedCards}/>
                <div style={{textAlign: "center", margin: "20px 20px"}}>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
                    <span style={{margin: "0 10px"}}>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
                </div>
            </>
            }
        </div>

    );
}


