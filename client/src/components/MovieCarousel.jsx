// From Dependencies
import Carousel from 'react-bootstrap/Carousel';
// From Other Files
import { One } from './carouselMovies/One';
import { Two } from './carouselMovies/Two';
import { Three } from './carouselMovies/Three';

export function MovieCarousel() {
    return(
        <div>
            <Carousel className='movieCarousel'>
                <Carousel.Item interval={3000}>
                    <One />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Two />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Three />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}