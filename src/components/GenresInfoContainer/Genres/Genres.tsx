import {useEffect, useState} from "react";

import {GenreType} from "../../../interfaces";
import {genreService} from "../../../services";
import {Genre} from "../Genre/Genre";
import css from "./Genres.module.css"

const Genres = () => {
    const [genres, setGenres] = useState<GenreType[]>([]);

    useEffect(() => {
    genreService.getAll().then(({data}) => setGenres(data));
    }, []);

    const handleGenreClick = (genre: GenreType) => {};

    const getMovieCountForGenre = (genreName: string): number | null => {
        const genre = genres.find(genre => genre.name === genreName);
        return genre ? genre.movieCount : null;
    };

    return (
        <div className={css.Genres}>
            {genres.map(genre => <Genre
                key={genre.id}
                genre={genre}
                onGenreClick={handleGenreClick}
                movieCount={getMovieCountForGenre(genre.name)}
            />)}
        </div>
    );
};

export {Genres};