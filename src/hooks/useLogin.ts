import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/redux-hooks';
import { RootState } from '../redux/store';
import { useFormik } from 'formik';
import { login } from '../redux/services/auth-thunk';

export const useLogin = () => {
    const { isError } = useAppSelector((state: RootState) => state.auth);
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

    return {
        values,
        handleChange,
        handleSubmit,
        isError,
    };
};
