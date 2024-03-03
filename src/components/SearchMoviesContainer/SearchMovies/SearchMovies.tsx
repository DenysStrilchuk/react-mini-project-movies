import React, {useState} from "react";
import {SearchResultType} from "../../../interfaces";
import {searchService} from "../../../services";
import {Movie} from "../../MoviesListContainer";

const SearchMovies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<SearchResultType[]>([]);

    const handleSearch = async () => {
        if (query.trim() !== "") {
            try {
                const response = await searchService.getAll(query);
                setMovies(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {SearchMovies};
