import React from "react";

import css from "./Pagination.module.css"

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setPage: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, setPage}) => {
    const pages = Array.from({length: totalPages}, (_, i) => i + 1);
    const startPage = Math.max(1, currentPage - 5);
    const endPage = Math.min(totalPages, currentPage + 5);

    return (
        <div>
            {pages.slice(startPage - 1, endPage).map((page) => (
                <button key={page} onClick={() => setPage(page)} disabled={page === currentPage} className={css.button}>
                    {page}
                </button>
            ))}
        </div>
    );
};

export {
    Pagination
}
