import { useState, ChangeEvent, FormEvent } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void; // Specify the type for onSearch prop
}

function SearchBar({ onSearch }: SearchBarProps) {
    const [query, setQuery] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // Specify the type for e
        setQuery(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { // Specify the type for e
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange} placeholder="Search..." />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
