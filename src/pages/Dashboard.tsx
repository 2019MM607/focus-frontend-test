import { SearchBar, MoviesList } from '../components/Dashboard';
import { LoadAnimation, Title } from '../components/app';
import { usePopularsMovies, useUpcommingMovies } from '../hooks';
import pandaAnimation from '../../public/panda.json';

const Dashboard = () => {
    const { movies, isLoading } = usePopularsMovies('');
    const { upComings } = useUpcommingMovies();
    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <LoadAnimation animationData={pandaAnimation} />
                </div>
            ) : (
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
            )}
        </>
    );
};

export default Dashboard;
