import { useEffect, useState } from 'react';
import {MovieType} from "../../../interfaces";
import { useParams } from "react-router-dom";
import { movieService } from "../../../services";
import { MovieCard } from "../MovieCard/MovieCard";

const MoviesCard = () => {
    const { id } = useParams<{ id?: string }>();
    const [movieCard, setMoviesCard] = useState<MovieType | null>(null);

    useEffect(() => {
        if (id) {
            movieService.getByMovieId(parseInt(id)).then(({ data }) => {
                setMoviesCard(data);
            });
        }
    }, [id]);

    return (
        <div>
            {movieCard && <MovieCard movieCard={movieCard} />}
        </div>
    );
};

export { MoviesCard };
