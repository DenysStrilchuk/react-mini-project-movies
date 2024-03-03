import {FC, PropsWithChildren} from 'react';
import {Badge, Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

import {GenreType} from '../../../interfaces';
import css from "./Genre.module.css"

interface IProps extends PropsWithChildren {
    genre: GenreType;
    onGenreClick: (genre: GenreType) => void;
}

const Genre: FC<IProps> = ({genre, onGenreClick}) => {
    const {id, name} = genre;
    const navigate = useNavigate()

    return (
        <Button className={css.genre_badge} onClick={() => navigate(`/genres/${id}`)} variant="primary">
            {name} <Badge bg="secondary">9</Badge>
        </Button>
    )
};

export {Genre};
