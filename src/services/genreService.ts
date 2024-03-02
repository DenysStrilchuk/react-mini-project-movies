import {IRes} from "../types";
import {GenreType} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAll: (): IRes<GenreType[]>  => apiService.get(urls.genres.base),
    getByGenreId: (genreId: number, page: number): IRes<GenreType[]> => apiService.get(urls.genres.byGenreId(genreId), {params:{page}})
}


export {
    genreService
}