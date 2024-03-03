import {IMovie} from "./IMovie";

export interface MovieSearchResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}