import { useSearchParams } from "react-router-dom";
import {PageQuery} from "../interfaces";

const usePageQuery = (): PageQuery => {
    const [query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page');

    const prevPage = () => {
        if (page !== null && !isNaN(+page)) {
            const prevPage = Math.max(1, +page - 1).toString();
            setQuery({ page: prevPage });
        }
    };

    const nextPage = () => {
        if (page !== null && !isNaN(+page)) {
            const nextPage = (+page + 1).toString();
            setQuery({ page: nextPage });
        }
    };

    const setPage = (newPage: string) => {
        setQuery({ page: newPage });
    };

    return {
        page,
        prevPage,
        nextPage,
        setPage
    };
};

export { usePageQuery };
