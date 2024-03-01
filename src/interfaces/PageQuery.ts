export interface PageQuery {
    page: string | null;
    prevPage: () => void;
    nextPage: () => void;
    setPage: (newPage: string) => void;
}