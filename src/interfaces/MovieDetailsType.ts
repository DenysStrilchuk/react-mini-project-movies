import {GenreType} from "./GenreType";

export interface MovieDetailsType {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    genres: GenreType[];
    release_date: string;
    runtime: number;
    vote_average: number;
    backdrop_path: string;
}