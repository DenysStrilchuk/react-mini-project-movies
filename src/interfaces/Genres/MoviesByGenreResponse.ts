import {MovieByGenre} from "../Movies/MovieByGenre";

export interface MoviesByGenreResponse {
    page: number;
    total_pages: number;
    results: MovieByGenre[];
}