import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { usePopularsMovies } from '../../hooks';
import { useFormik } from 'formik';

export const SearchBar = () => {
    const { handleChange, values } = useFormik({
        initialValues: {
            query: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const { refetch } = usePopularsMovies(values.query);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        refetch();
    };
    return (
        <div className=" mt-5 ">
            <form
                onSubmit={handleSubmit}
                className="w-full flex justify-start gap-1"
            >
                <input
                    onChange={handleChange}
                    value={values.query}
                    placeholder="Search a movie..."
                    type="text"
                    name="query"
                    className="text-textWhite ml-2 border border-red  p-2 w-[80%] md:w-1/2 lg:w-1/3 bg-transparent  rounded-xl focus:outline-none"
                />
                <button
                    type="submit"
                    className="p-2 text-red bg-transparent rounded-xl focus:outline-none"
                >
                    <FaSearch className="" size={20} />
                </button>
            </form>
        </div>
    );
};
