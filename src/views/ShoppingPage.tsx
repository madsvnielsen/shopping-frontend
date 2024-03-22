import Banner from "../Components/Banner.tsx";
import { PokemonAPI } from "../PokemonAPI.ts";
import { useEffect, useState } from "react";
import CardList from "../Components/CardList.tsx";

export function ShoppingPage() {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function getCards() {
            const result = await PokemonAPI.listOfCards();
            setCards(result);
            setTotalPages(Math.ceil(result.length / 10)); // Assuming 10 cards per page
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
            <CardList cards={cards} currentPage={currentPage} totalPages={totalPages} />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
                <span style={{ margin: "0 10px" }}>Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
            </div>
        </div>
    );
}
