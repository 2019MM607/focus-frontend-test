import MovieCard from '../../components/app/MovieCard';
import { Movie } from '../../interfaces/movie.interface';

interface MoviesListProps {
    movies: Movie[];
}
export const MoviesList = ({ movies }: MoviesListProps) => {
    return (
        <div className="grid justify-items-center  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-10 mx-5">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
