// From Other Files
import { Header } from "../components/Header";
import { MovieCarousel } from "../components/MovieCarousel";

export function Home() {
    return (
        <div className="home">
            <Header />
            <MovieCarousel />
        </div>
    )
}