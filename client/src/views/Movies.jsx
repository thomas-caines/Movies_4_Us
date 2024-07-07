// From Other Files
import { Header } from "../components/Header";
// From Dependecies
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export function Movies() {
    const [movies, setMovies] = useState([])

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
                setMovies(response.results)
            })
            .catch(err => console.error(err));
    },[])

    return(
        <div className="moviesPage">
            <Header />
            <div className="movieCard_Holder" >
                {
                    movies.map( ({title, poster_path, id}) => (
                        <div className="movieCard" key={id}>
                            <Card className="moiveCard_Card">
                                <Link to={`/movies/${id}`}> 
                                    <Card.Img className="movieCard_Img" variant="top" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                                </Link>
                            </Card>
                        </div>
                    ))
                }   
            </div>
        </div>
    )
}
