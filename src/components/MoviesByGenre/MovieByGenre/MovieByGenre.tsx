import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import {MyCustomStarRating} from "../../StarRatingContainer/MyCustomStarRating";
import {MovieType} from "../../../interfaces";
import {PosterPreview} from "../../PosterPreviewContainer";
import css from "./MovieByGenre.module.css";

interface IProps extends PropsWithChildren {
    movie: MovieType;
}

const MovieByGenre: FC<IProps> = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;
    const navigate = useNavigate();
    return (
        <div className={css.MovieByGenre} onClick={() => navigate(`/movie/${id}`)}>
            <PosterPreview img={poster_path} title={title}/>
            <div>{title}</div>
            <MyCustomStarRating rating={vote_average}/>
        </div>
    );
};

export {MovieByGenre};