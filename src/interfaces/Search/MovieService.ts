import {IRes} from "../../types";
import {MovieSearchResponse} from "./MovieSearchResponse";

export interface MovieService {
    getAll: (query: string) => IRes<MovieSearchResponse>;
}