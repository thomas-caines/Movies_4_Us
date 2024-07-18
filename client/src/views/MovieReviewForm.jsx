// From Other Files
import { Header } from '../components/Header';
import { createReview } from '../services/Movies.Services';
// From Dependecies 
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function MovieReviewForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [movie, setMovie] = useState({})
    const [review, setReview] = useState({
        rating: '',
        review_body: '',
        recommend: false,
        movie_id: id
    })


    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWVjMDBkY2JhYWU0Mjk1NWMzMDQxZDZkMTI5NmI0YyIsIm5iZiI6MTcxOTI1MTcwOC43ODM5NTgsInN1YiI6IjY2NzMyMmRjYWNiYTRiYTlhYWQ4MDRiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QqhTrO9vhWuAfREWRhotyTUyLAo0jeItdTeGUWtJYjs'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                setMovie(response)
            })
            .catch(err => console.error(err));
    }, [id])

    const updateInput = e => {
        const { name, value } = e.target
        setReview(prev => ({ ...prev, [name]: value }))
    }

    const updateCheck = e => {
        const { name } = e.target
        setReview(prev => ({ ...prev, [name]: !review.recommend }))
    }

    const submitHandler = e => {
        e.preventDefault()
        createReview(review)
            .then(res => {
                navigate(`/movies/${id}`)
            })
            .catch((error) => {
                setErrors(error.response.data.errors)
            })
    }

    return (
        <div>
            <Header />
            <h1> {movie.title} </h1>
            <div>
                <h2>Review:</h2>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Label>Rating: 1-10:</Form.Label>
                        <Form.Control
                            type='number'
                            name='rating'
                            value={review.rating}
                            onChange={updateInput}
                        />
                        {errors.rating && <p> {errors.rating.message} </p>}
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Your Thoughts:</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={5}
                            name='review_body'
                            value={review.review_body}
                            onChange={updateInput}
                        />
                    </Form.Group>

                    {errors.review_body && <p> {errors.review_body.message} </p>}

                    <Form.Group>
                        <Form.Label>Would you recommend to others?</Form.Label>
                        <Form.Check
                            name='recommend'
                            value={review.recommend}
                            onChange={updateCheck}
                        />
                    </Form.Group>

                    <Button variant='primary' type='submit'>
                        Leave Review
                    </Button>
                </Form>
            </div>
        </div>
    )
}
