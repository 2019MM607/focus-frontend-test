import { SearchBar, MoviesList } from '../components/Dashboard';
import { Title } from '../components/app';
import { usePopularsMovies, useUpcommingMovies } from '../hooks';

const Dashboard = () => {
    const { movies } = usePopularsMovies('');
    const { upComings } = useUpcommingMovies();
    return (
        <div>
            <SearchBar />
            <div className="mt-10 p-2">
                <Title title="Movies" />
                <MoviesList movies={movies} />
            </div>

            <div className="mt-36 bg-background rounded-t-xl p-2">
                <Title title="Upcoming Movies" />
                <MoviesList movies={upComings} />
            </div>
        </div>
    );
};

export default Dashboard;
