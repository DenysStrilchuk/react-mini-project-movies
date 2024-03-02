import {FC, PropsWithChildren} from 'react';
import {GenreType} from "../../interfaces";

interface IProps extends PropsWithChildren {
    overview: string,
    rating: number,
    release: string,
    runtime: number,
    genres: GenreType[];
    onGenreClick: (genre: GenreType) => void;
}

const MovieInfo: FC<IProps> = ({ overview, release, runtime, genres, onGenreClick }) => {
    return (
        <div>
            <h2>Overview:</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <div>
                {genres.map((genre, index) => (
                    <Genre key={index} genre={genre} onGenreClick={onGenreClick}/>
                ))}
                <h2>Runtime</h2>
                <p>{runtime} minutes</p>
                <h2>Release date</h2>
                <p>{release}</p>
            </div>
        </div>
    );
};

export {MovieInfo};