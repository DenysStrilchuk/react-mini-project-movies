import {FC, PropsWithChildren, useState} from 'react';
import {MyCustomStarRating} from "../../StarRatingContainer/MyCustomStarRating";

import {GenreType, MovieDetailsType} from "../../../interfaces";
import {BackdropPoster} from "../../PosterPreviewContainer";
import {MovieInfo} from "../../MovieInfoContainer";
import css from "./MovieCard.module.css";

interface IProps extends PropsWithChildren {
    movieCard: MovieDetailsType;
}

const MovieCard: FC<IProps> = ({movieCard}) => {
    const {title, overview, vote_average, genres, backdrop_path, release_date, runtime} = movieCard;
    const [, setSelectedGenre] = useState<GenreType | null>(null);

    const handleGenreClick = (genre: GenreType) => {
        setSelectedGenre(genre);
    }

    return (
        <div className={css.MovieCard}>
            <div className={css.mainInfo}>
                <div className={css.img_style}>
                    <h1 className={css.title}>{title}</h1>
                    <BackdropPoster img={backdrop_path} title={title}/>
                    <h2>Rating</h2>
                    <MyCustomStarRating rating={vote_average}/>
                </div>
                <div className={css.movieInfo}>
                    <MovieInfo
                        overview={overview}
                        rating={vote_average}
                        release={release_date}
                        runtime={runtime}
                        genres={genres}
                        onGenreClick={handleGenreClick}
                    />
                </div>
            </div>
        </div>
    );
};

export {MovieCard};