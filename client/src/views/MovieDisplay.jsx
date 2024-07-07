// From Other Files 
import { Header } from '../components/Header';
import { getAllReviews } from '../services/Movies.Services';
// From Dependencies
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export function MovieDisplay() {
    const [movie, setMovie] = useState({})
    const [reviews, setReviews] = useState([])
    const [filteredReviews, setFilteredReviews] = useState([])

    const { id } = useParams()

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
        getAllReviews()
        .then(res => {
            setReviews(res)
        })
        .catch( () => {} )
    },[])

    useEffect( () => {
        let filteredReviews = reviews.filter( (review) => review.movie_id == id )
        setFilteredReviews(filteredReviews)
    },[reviews] )



    return(
        <div className='movieDisplay' >
            <Header />

            <Container className='movieContainer'>
                <Row>
                    <Col className='movieContainer_Review'>
                        <h1> {movie.title} </h1>

                        <h2> Rating: {movie.vote_average}/10 </h2>
                        
                        <p> {movie.overview} </p>

                        <Link className='movieContainer_Link' to={`/movies/review/${movie.id}`}>Leave a Review</Link>
                    </Col>
                    <Col>
                       <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} thumbnail />
                    </Col>
                </Row>
                <Row>
                <div className='movieReviews'>
                    <h3 className='movieReviews_h3'>Reviews:</h3>
                    {
                        filteredReviews.map( (review) => (
                            <div className='movieReviews_Review' key={review.id}>
                                    <h3> Rating: { review.rating } </h3>
                                    <p> {review.review_body} </p>
                                    {
                                        review.recommend == true
                                        ? <p> Recommendation: Give it a watch </p>
                                        : <p> Recommendation: Don't waste your time </p>
                                    }
                                <Link className='movieContainer_Link' to={`/movies/review/display/${id}/${review._id}`}>
                                    Go to Review
                                </Link>
                            </div>
                        ) )
                    }
                </div>
                </Row>
            </Container>
        </div>
    )
}
