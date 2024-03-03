import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {

}

const MovieCard: FC<IProps> = () => {
    return (
        <div>
            MovieCard
        </div>
    );
};

export {MovieCard};