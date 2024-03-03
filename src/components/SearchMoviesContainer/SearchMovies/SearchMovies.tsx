import React, {useState} from "react";

import css from "./SearchMovies.module.css";
import {IMovie} from "../../../interfaces";
import {Movie} from "../../MoviesListContainer";
import {searchService} from "../../../services";


interface SearchMoviesProps {
}

const SearchMovies: React.FC<SearchMoviesProps> = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<IMovie[]>([]);

    const handleSearch = async () => {
        if (query.trim() !== "") {
            try {
                const response = await searchService.getAll(query);
                setMovies(response.data.results);
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
            <div className={css.input_style}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className={css.movies_list}>
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export {SearchMovies};
