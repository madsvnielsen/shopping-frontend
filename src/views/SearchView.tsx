import Banner from "../Components/Banner.tsx";
import { PokemonAPI } from "../PokemonAPI.ts";
import { useEffect, useState } from "react";
import CardList from "../Components/CardList.tsx";
import SearchBar from "../Components/SearchBar.tsx";
import {Card} from "../interfaces/Card.tsx";

export function SearchView() {
    const [cards, setCards] = useState([]as Card[]);
    const [currentPage, setCurrentPage] = useState(1);

    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        async function getCards() {
            if (searchQuery.length>0){
                const result = await PokemonAPI.searchcard(searchQuery,currentPage);
                setCards(result);
                setLoading(false)
            }else {
                const result = await PokemonAPI.listOfCards(currentPage);
                setCards(result);
                setLoading(false)
            }

        }
        getCards();
    }, [searchQuery]); // Include searchQuery in dependency array


    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const handleSearch = (query: string) => { // Specify the type for query
        setSearchQuery(query);
    };

    return (
        <div style={{ width: "100%" }}>
            <Banner goToBasket={true}/>
            <SearchBar onSearch={handleSearch} />
            {loading && <h1 className="loading-text">Finding the best pokemon cards for you.</h1>}

            {!loading && <>

                <CardList cards={cards} currentPage={currentPage} />
                <div style={{ textAlign: "center", margin: "20px 20px" }}>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</button>
                    <span style={{ margin: "0 10px" }}>Page {currentPage}</span>
                    <button onClick={handleNextPage}>Next Page</button>
                </div>
            </>
            }
        </div>
    );
}