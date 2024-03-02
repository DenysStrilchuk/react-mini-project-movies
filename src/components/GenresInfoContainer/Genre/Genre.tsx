import { FC, PropsWithChildren } from 'react';
import { Badge, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import { GenreType } from '../../../interfaces';
import css from './Genre.module.css';

interface IProps extends PropsWithChildren {
    genre: GenreType;
    onGenreClick: (genre: GenreType) => void;
    movieCount: number | null;
}

const Genre: FC<IProps> = ({ genre, movieCount, onGenreClick }) => {
    const { id, name } = genre;
    const navigate = useNavigate();

    return (
        <Button className="mr-2" color="info" variant="outline-primary" onClick={() => navigate(`/genres/${id}`)}>
            {name} <Badge className={css.genre_badge + ' bg-info'}>{movieCount}</Badge>
        </Button>
    );
};

export { Genre };
