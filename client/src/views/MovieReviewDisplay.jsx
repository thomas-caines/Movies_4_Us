// From Other Files
import { Header } from "../components/Header";
import { getOneReviewById, updateOneReviewById, deleteOneReviewById } from '../services/Movies.Services';
// From Dependencies 
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export function MovieReviewDisplay() {
    const [movie, setMovie] = useState({})
    const [errors, setErrors] = useState({})
    const [review, setReview] = useState({})

    const { id, review_id } = useParams()
    const navigate = useNavigate()

    useEffect( () => {
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
    },[id])

    useEffect( () => {
        getOneReviewById(review_id)
        .then(res => {
            setReview(res)
        })
        .catch( () => {} )
    },[])

    const updateCheck = e => {
        const {name} = e.target
        setReview( prev => ({...prev, [name]: !review.recommend })) 
    }

    const updateInput = e => {
        const {name, value} = e.target 
        setReview(prev => ({...prev, [name]: value}))
    }

    const submitHandler = e => {
        e.preventDefault()

        updateOneReviewById(review)
        .then(res => {
            navigate(`/movies/${id}`)
        })
        .catch((error) => {
            setErrors(error.response.data.errors)
            console.log(errors)
        })
    }

    const deleteReview= () => {
        deleteOneReviewById(review_id)
        .then(res => {
            navigate(`/movies/${id}`)
        })
        .catch((error) => {})
    }

    return(
        <div className='movieReviewForm'>
            <Header />

            <div className='reviewForm'>
                <h1> Review for: {movie.title} </h1>
            </div>
                <div className='reviewForm_Holder'>
                    <h3>Review:</h3>
                    <Form onSubmit={submitHandler}>
                        <Form.Group>
                        <Form.Label className="reviewForm_Label" >Rating: 1-10:</Form.Label>
                            <Form.Control 
                                className='reviewForm_Control'
                                type='number' 
                                name='rating'
                                value={review.rating}
                                onChange={updateInput}
                            />
                        </Form.Group>

                        { errors.rating && <p className='errors'> {errors.rating.message} </p> }

                        <Form.Group>
                            <Form.Label className="reviewForm_Label" >Your Thoughts:</Form.Label>
                            <Form.Control 
                                className='reviewForm_Control'
                                as='textarea' 
                                rows={5} 
                                name='review_body'
                                value={review.review_body}
                                onChange={updateInput}
                            />
                        </Form.Group>

                        { errors.review_body && <p className='errors'> {errors.review_body.message} </p> }

                        <Form.Group>
                            <Form.Label className="reviewForm_Label" >Would you recommend to others?</Form.Label>
                            <Form.Check 
                                name='recommend'
                                value={review.recommend}
                                onChange={updateCheck}
                                checked={ review.recommend == true ? 'checked': null }
                            />
                        </Form.Group>

                        <Button className="reviewForm_Label" variant='primary' type='submit'>
                            Update Review
                        </Button>
                    </Form>
                    <Button onClick={deleteReview} className="deleteButton" variant='primary'>
                            Delete Review
                    </Button>
                </div>
        </div>
    )
}