import { useEffect, useState } from 'react';
import {MovieType} from "../../../interfaces";
import {useNavigate, useParams} from "react-router-dom";
import { movieService } from "../../../services";
import { MovieCard } from "../MovieCard/MovieCard";
import css from "./MoviesCard.module.css";

const MoviesCard = () => {
    const { id } = useParams<{ id?: string }>();
    const [movieCard, setMoviesCard] = useState<MovieType | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (id) {
            movieService.getByMovieId(parseInt(id)).then(({ data }) => {
                setMoviesCard(data);
            });
        }
    }, [id]);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className={css.backBtn}>
                <button onClick={goBack}>Back</button>
            </div>
            {movieCard && <MovieCard movieCard={movieCard} />}
        </div>
    );
};

export { MoviesCard };
