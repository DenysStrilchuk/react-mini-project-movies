import {FC, PropsWithChildren} from 'react';


interface IProps extends PropsWithChildren {
    vote_average: number;
}

const StarRating: FC<IProps> = ({vote_average}) => {
    return (
        <div>

        </div>
    );
};

export {StarRating};