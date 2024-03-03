import {IRes} from "../../types";
import {MovieSearchResponse} from "./MovieSearchResponse";

export interface SearchService {
    getAll: (query: string) => IRes<MovieSearchResponse>;
}