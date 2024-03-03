import {FC, PropsWithChildren} from 'react';

import css from "./Poster.module.css"

interface IProps extends PropsWithChildren {
    img: string,
    title: string
}

const PosterPreview: FC<IProps> = ({img, title}) => {
    return (
        <div>
            <img className={css.Poster} src={`https://image.tmdb.org/t/p/w500${img}`} alt={title}/>
        </div>
    );
};

export {PosterPreview};