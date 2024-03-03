import {apiService} from "./apiService";
import {urls} from "../constants";
import {MovieSearchResponse, MovieService} from "../interfaces";

const searchService: MovieService = {
    getAll: (query: string) => {
        return apiService.get<MovieSearchResponse>(
            `${urls.search.base}?query=${query}`
        );
    },
};


export {
    searchService
}