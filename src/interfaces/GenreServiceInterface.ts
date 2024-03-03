import {IRes} from "../types";
import {IGenre} from "./GenreInterface";

export interface IGenreService {
    getAll: () => IRes<{ genres: IGenre[] }>;
    getByGenreId: (genreId: number, page: number) => IRes<{ genres: IGenre[] }>;
}