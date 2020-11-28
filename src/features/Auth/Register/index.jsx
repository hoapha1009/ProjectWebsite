import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from '../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {
    onCloseDialog: PropTypes.func,
};

function Register({ onCloseDialog }) {
    const dispatch = useDispatch();
    const handleFormSubmit = async (values) => {
        try {
            console.log('Form submit: ', values);
            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('user: ', user);
        } catch (error) {
            console.log('Failed: ', error);
        }
    };
    return (
        <div>
            <RegisterForm onSubmit={handleFormSubmit} />
        </div>
    );
}

export default Register;
