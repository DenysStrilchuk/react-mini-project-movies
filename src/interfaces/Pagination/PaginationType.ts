import {MovieType} from "../Movies/MovieType";

export interface PaginationType {
    page: number;
    total_pages: number;
    results: MovieType[];
}