// From Dependencies
import Carousel from 'react-bootstrap/Carousel';
// From Other Files
import { One } from './carouselMovies/One';
import { CarouselItem } from './carouselMovies/CarouselItem';
import { Three } from './carouselMovies/Three';
import { useState, useEffect } from 'react';

export function MovieCarousel() {

    const [ posters, setPosters ] = useState([])

    useEffect( () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWVjMDBkY2JhYWU0Mjk1NWMzMDQxZDZkMTI5NmI0YyIsIm5iZiI6MTcxOTI1MTcwOC43ODM5NTgsInN1YiI6IjY2NzMyMmRjYWNiYTRiYTlhYWQ4MDRiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QqhTrO9vhWuAfREWRhotyTUyLAo0jeItdTeGUWtJYjs'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => {
                setPosters(response.results)
            })
            .catch(err => (err));
    },[])

    return(
        <div>
            <Carousel className='movieCarousel'>
                <Carousel.Item interval={3000}>
                    <CarouselItem poster={posters[0]} />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <CarouselItem poster={posters[1]} />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <CarouselItem poster={posters[2]} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}