import { useState, useEffect } from 'react';
import { fetchActorsMovies, ImageURL } from '../../api/api';
import { list, item, name } from './MovieCast.module.css';


export default function MovieCast({ movieId }) {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchActorsMovies(movieId)
            .then(request => setCast(request.cast));
    }, [movieId]);

    return (
        <ul className={list}>
            {cast.map(element => (
                <li key={element.id} className={item}>
                    <img
                        src={ImageURL + element.profile_path}
                        alt={element.name}
                        width='100'
                        height='150'
                    />
                    <p className={name}>{element.name}</p>
                </li>
            ))
            }
        </ul>
    );
}