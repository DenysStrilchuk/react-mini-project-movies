import { FC, PropsWithChildren } from 'react';
import {Badge, Button} from "react-bootstrap";

import { useNavigate } from 'react-router-dom';
import { GenreType } from '../../../interfaces';
import css  from "./Genre.module.css"

interface IProps extends PropsWithChildren {
    genre: GenreType;
}

const Genre: FC<IProps> = ({ genre }) => {
    const { id, name } = genre;
    const navigate = useNavigate()

    return (
        <Button className={css.genre_badge} onClick={() => navigate(`/genres/${id}`)} variant="primary">
            {name} <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    )};

export {Genre};
