import { useState, useEffect } from 'react';
import { fetchReviewsMovies } from '../../api/api';
import { desc, title, item } from './MovieReview.module.css';

export default function MovieReview({ movieId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviewsMovies(movieId)
            .then(request => setReviews(request.results));
    }, [movieId]);

    return (
        <div>
            {reviews.length > 0 ? (
                <>
                    <ul >
                        {reviews.map((element, index) => (
                            <li key={index} className={item}>
                                <p className={title}>{element.author}</p>
                                <p className={desc}>{element.content}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (<p>No Reviews</p>)}
        </div>
    );
} 