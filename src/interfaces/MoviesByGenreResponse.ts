import {MovieByGenre} from "./MovieByGenre";

export interface MoviesByGenreResponse {
    page: number;
    total_pages: number;
    results: MovieByGenre[];
}