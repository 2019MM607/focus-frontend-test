import { useFormik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../app/redux-hooks';
import { login } from '../redux/services/auth-thunk';

const Login = () => {
    const appDispatch = useAppDispatch();
    const { values, handleChange, submitForm } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            appDispatch(login(values));
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitForm();
    };

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
            <form
                onSubmit={handleSubmit}
                className=" w-[90%] md:w-1/3 lg:w-1/4 border border-red p-3 rounded-lg flex flex-col justify-center items-center"
            >
                <div className=" w-full flex justify-center  text-white rounded-lg p-2">
                    <h1 className="text-xl">Welcome back !!!</h1>
                </div>
                <div className="flex flex-col w-full justify-center items-center my-8">
                    <label htmlFor="email" className="text-red">
                        Email
                    </label>
                    <input
                        placeholder="johndoe@gmail.com"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        className=" text-red border border-b-red rounded-lg p-2 w-full bg-transparent focus:outline-none"
                    />
                </div>

                <div className="flex flex-col w-full justify-center items-center my-8">
                    <label htmlFor="email" className="text-red">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        className=" text-red border border-b-red rounded-lg p-2 w-full bg-transparent focus:outline-none"
                    />
                </div>

                <input
                    type="submit"
                    value="LOGIN"
                    className="bg-red w-full p-2 rounded-lg text-textWhite cursor-pointer"
                />
            </form>
        </div>
    );
};

export default Login;
