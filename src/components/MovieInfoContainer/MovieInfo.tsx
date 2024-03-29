import {FC, PropsWithChildren} from 'react';

import {GenreType} from "../../interfaces";
import {Genre} from "../GenresInfoContainer";
import css from "./MovieInfo.module.css"

interface IProps extends PropsWithChildren {
    overview: string,
    rating: number,
    release: string,
    runtime: number,
    genres: GenreType[];
    onGenreClick: (genre: GenreType) => void;
}

const MovieInfo: FC<IProps> = ({overview, release, runtime, genres, onGenreClick}) => {
    return (
        <div>
            <h2>Overview:</h2>
            <p className={css.pInfo}>{overview}</p>
            <h2>Genres</h2>
            <div className={css.genres}>
                {genres.map((genre, index) => (
                    <Genre key={index} genre={genre} onGenreClick={onGenreClick}/>
                ))}
            </div>
            <div className={css.runTimeBlock}>
                <h2>Runtime</h2>
                <p className={css.pInfo}>{runtime} minutes</p>
                <h2>Release date</h2>
                <p className={css.pInfo}>{release}</p>
            </div>


        </div>
    );
};

export {MovieInfo};