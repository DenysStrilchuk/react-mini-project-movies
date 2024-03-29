import {FC, PropsWithChildren} from 'react';


interface IProps extends PropsWithChildren {
    img: string;
    title: string;
}

const BackdropPoster: FC<IProps> = ({img, title}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title}/>
        </div>
    );
};

export {BackdropPoster};