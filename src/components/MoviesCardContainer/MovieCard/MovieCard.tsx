import {FC, PropsWithChildren, useState} from 'react';
import {GenreType, MovieDetailsType, MovieType} from "../../../interfaces";
import {BackdropPoster} from "../../PosterPreviewContainer";
import {MyCustomStarRating} from "../../StarRatingContainer/MyCustomStarRating";
import {MovieInfo} from "../../MovieInfoContainer";

interface IProps extends PropsWithChildren {
    movieCard: MovieDetailsType;
}

const MovieCard: FC<IProps> = ({movieCard}) => {
    const {title, overview, vote_average, genres, backdrop_path, release_date, runtime} = movieCard;
    const [selectedGenre, setSelectedGenre] = useState<GenreType |  null>(null);

    const handleGenreClick = (genre: GenreType) => {
        setSelectedGenre(genre);
    }

    return (
        <div>
            <h1>{title}</h1>
            <BackdropPoster img={backdrop_path} title={title}/>
            <h2>Rating</h2>
            <MyCustomStarRating rating={vote_average}/>
            <MovieInfo
                overview={overview}
                rating={vote_average}
                release={release_date}
                runtime={runtime}
                genres={genres}
                onGenreClick={handleGenreClick}
            />
        </div>
    );
};

export {MovieCard};