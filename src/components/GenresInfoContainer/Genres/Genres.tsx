import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import css from "./Genres.module.css";
import {Genre} from "../Genre/Genre";
import {genreService} from "../../../services";
import {IGenre} from "../../../interfaces";

const Genres = () => {
    const [genres, setGenres] = useState<{ genres: IGenre[] }>({genres: []});
    const navigate = useNavigate();

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data));
    }, []);

    const handleGenreClick = (genre: IGenre) => {
    };

    const goBack = () => {
        navigate(-1);
    };

    const goNext = () => {
        navigate(+1);
    };

    return (
        <div>
            <div className={css.Genres}>
                {genres.genres.map(genre => <Genre key={genre.id} genre={genre} onGenreClick={handleGenreClick}/>)}
            </div>
            <div className={css.btnNavigate}>
                <button onClick={goBack}>Back</button>
                <button onClick={goNext}>Forward</button>
            </div>

        </div>
    );
};

export {Genres};
