// From Other Files
import { Header } from "../components/Header";
// From Dependecies
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'


export function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
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
                setMovies(response.results)
            })
            .catch(err => console.error(err));

    }, [])

    return (
        <div className="movies">
            <Header />
            <div className="movies-Holder">
                {
                    movies.map(({ poster_path, id }) => (
                        <div className="movies-Card">
                            <Link to={`/movies/${id}`}>
                                <Image className="movies-Img" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
