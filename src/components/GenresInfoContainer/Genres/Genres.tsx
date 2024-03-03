import { useEffect, useState } from "react";


import css from "./Genres.module.css";
import {Genre} from "../Genre/Genre";
import {IGenre} from "../../../interfaces/GenreInterface";
import {genreService} from "../../../services";

const Genres = () => {
    const [genres, setGenres] = useState<{ genres: IGenre[] }>({ genres: [] });

    useEffect(() => {
        genreService.getAll().then(({ data }) => setGenres(data));
    }, []);

    const handleGenreClick = (genre: IGenre) => {
        console.log(`Clicked on genre: ${genre.name}`);
    };

    return (
        <div className={css.Genres}>
            {genres.genres.map(genre => <Genre key={genre.id} genre={genre} onGenreClick={handleGenreClick}/>)}
a        </div>
    );
};

export { Genres };
