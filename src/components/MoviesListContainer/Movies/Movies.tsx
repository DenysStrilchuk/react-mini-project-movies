import { useEffect, useState } from "react";

import { MovieType, PaginationType } from "../../../interfaces";
import css from './Movies.module.css';
import { usePageQuery } from "../../../hooks";
import { movieService } from "../../../services";
import {Movie} from "../Movie/Movie";
import {Pagination} from "../../PaginationContainer";

const Movies = () => {
    const [movies, setMovies] = useState<PaginationType>({ page: 0, total_pages: 0, results: [] });
    const { page, prevPage, nextPage, setPage } = usePageQuery();
    const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(true);
    const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (page !== null) {
            const pageNumber = parseInt(page);
            movieService.getAll(pageNumber).then((response) => {
                const data = response.data;
                if (Array.isArray(data)) {

                    return;
                }
                const { page: newPage, total_pages, results } = data;
                setMovies({
                    page: newPage,
                    total_pages,
                    results
                });
                setIsPrevDisabled(newPage === 1);
                setIsNextDisabled(newPage === total_pages);
            });
        }
    }, [page]);

    const goToPage = (newPage: number)  => {
        setPage(newPage.toString());
    };

    return (
        <div className={css.MoviesModule}>
            <div className={css.movies_list}>
                {movies.results.map((movie:MovieType) => <Movie  key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.buttons_block}>
                <button disabled={isPrevDisabled} onClick={prevPage} className={css.buttons}>prev</button>
                <div>
                    <Pagination currentPage={page !== null && page !== undefined ? parseInt(page) : 1}
                                totalPages={movies.total_pages} setPage={goToPage}/>
                </div>
                <button disabled={isNextDisabled} onClick={nextPage} className={css.buttons}>next</button>
            </div>
        </div>
    );
};

export {Movies};
