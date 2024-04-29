import Banner from "../Components/Banner.tsx";
import { PokemonAPI } from "../PokemonAPI.ts";
import { useEffect, useState } from "react";
import CardList from "../Components/CardList.tsx";

export function ShoppingPage() {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    //const [totalPages, setTotalPages] = useState(1);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getCards() {
            const result = await PokemonAPI.listOfCards(currentPage);
            setCards(result);
            setLoading(false)
        }
        getCards();
    }, []);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div style={{ width: "100%" }}>
            <Banner goToBasket={true}/>
            {loading && <h1 className="loading-text">Finding the best pokemon cards for you.</h1>}

            {!loading && <>
                <CardList cards={cards} currentPage={currentPage}  />
                <div style={{ textAlign: "center", margin: "20px 20px" }}>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
                    <span style={{ margin: "0 10px" }}>Page {currentPage} </span>
                    <button onClick={handleNextPage} >Next Page</button>
                </div>
            </>
            }
        </div>
    );
}
