import {IRes} from "../types";
import {SearchResultType} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {
    getAll: (query: string): IRes<SearchResultType[]> => {
        return apiService.get(urls.search.base, {params:{query}})
    }
}

export {
    searchService
}