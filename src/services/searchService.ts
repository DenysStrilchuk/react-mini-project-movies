import {apiService} from "./apiService";
import {urls} from "../constants";
import {MovieSearchResponse, SearchService} from "../interfaces";

const searchService: SearchService = {
    getAll: (query: string) => {
        return apiService.get<MovieSearchResponse>(
            `${urls.search.base}?query=${query}`
        );
    },
};


export {
    searchService
}