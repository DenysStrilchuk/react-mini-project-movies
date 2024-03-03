import {apiService} from "./apiService";

import {urls} from "../constants";
import {IGenreService} from "../interfaces";

export const genreService: IGenreService = {
    getAll: () => apiService.get(urls.genres.base),
    getByGenreId: (genreId, page) =>
        apiService.get(urls.genres.byGenreId(genreId), {params: {page}}),
};
