import {IRes} from "../types";
import {MovieType} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: (page: number): IRes<MovieType[]> => {
        return apiService.get(urls.movie.base, {params: {page}});
    },
    getByMovieId: (movieId: number): IRes<MovieType> => {
        return apiService.get(urls.movieDetails.movieById(movieId));
    }
}

export {
    movieService
}