import { SearchBar, MoviesList } from '../components/Dashboard';
import { usePopularsMovies, useUpcommingMovies } from '../hooks';
import { Layout } from './Layout';

export const Dashboard = () => {
  const { movies } = usePopularsMovies('');
  const { upComings } = useUpcommingMovies();
  return (
    <Layout>
      <div className="">Dashboard</div>
      <SearchBar />
      <div className="mt-10 p-2">
        <h2 className="text-textWhite text-2xl md:ml-10 ml-2 ">Movies</h2>
        <MoviesList movies={movies} />
      </div>

      <div className="mt-36 bg-background rounded-t-xl p-2">
        <h2 className="text-textWhite text-2xl md:ml-10 ml-2">
          Upcoming movies
        </h2>
        <MoviesList movies={upComings} />
      </div>
    </Layout>
  );
};
