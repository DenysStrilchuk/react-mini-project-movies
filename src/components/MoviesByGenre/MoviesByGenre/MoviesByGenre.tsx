import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MovieType, PaginationType } from "../../../interfaces";
import { usePageQuery } from "../../../hooks";
import { genreService } from "../../../services";
import { Pagination } from "../../PaginationContainer";
import {MovieByGenre} from "../MovieByGenre/MovieByGenre";
import css  from "./MoviesByGenre.module.css";

const MoviesByGenre = () => {
    const { id = '1' } = useParams<{ id: string }>();
    const [movies, setMovies] = useState<PaginationType>({ page: 0, total_pages: 0, results: [] });
    const { page, prevPage, nextPage, setPage } = usePageQuery();
    const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(true);
    const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (page !== null) {
            const pageNumber = parseInt(page !== undefined ? page : "1");
            genreService.getByGenreId(parseInt(id), pageNumber).then((response) => {
                const data = response.data;
                if (!("page" in data && "total_pages" in data && "results" in data)) {
                    // обробка помилки або виправлення некоректних даних
                    return;
                }
                const { page: newPage, total_pages, results } = data as PaginationType;
                setMovies({
                    page: newPage,
                    total_pages,
                    results
                });
                setIsPrevDisabled(newPage === 1);
                setIsNextDisabled(newPage === total_pages);
            });
        }
    }, [id, page]);

    const goToPage = (newPage: number) => {
        setPage(newPage.toString());
    };

    return (
        <div>
            <div className={css.movies_list}>
                {movies.results.map((movie: MovieType) => <MovieByGenre key={movie.id} movie={movie} />)}
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

export { MoviesByGenre };
