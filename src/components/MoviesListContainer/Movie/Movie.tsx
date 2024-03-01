import {FC, PropsWithChildren} from 'react';
import {MovieType} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: MovieType;
}

const Movie: FC<IProps> = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;
    const navigate = useNavigate();
    return (
        <div>
            <div>{title}</div>
        </div>
    );
};

export {Movie};