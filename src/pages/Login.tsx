import React from 'react';
import { useFormik } from 'formik';

import { useAppDispatch, useAppSelector } from '../app/redux-hooks';
import { login } from '../redux/services/auth-thunk';
import { RootState } from '../redux/store';
import { motion } from 'framer-motion';
import { useLogin } from '../hooks';

const Login = () => {
    const { handleChange, handleSubmit, isError, values } = useLogin();
    //shake
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: [0, 10, -10, 10, -10, 10, -10, 10, -10, 0],
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
            <motion.form
                variants={variants}
                initial="initial"
                animate={isError ? 'animate' : 'initial'}
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
                        required
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
                        required
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
            </motion.form>
        </div>
    );
};

export default Login;
