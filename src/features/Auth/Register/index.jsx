import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from '../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

Register.propTypes = {
    onCloseDiaLog: PropTypes.func,
};

function Register({ onCloseDiaLog }) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleFormSubmit = async (values) => {
        try {
            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            // Close dialog
            if (onCloseDiaLog) {
                onCloseDiaLog();
            }

            // Show snackbar
            enqueueSnackbar('Register successfully!!!', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };

    return (
        <div>
            <RegisterForm onSubmit={handleFormSubmit} />
        </div>
    );
}

export default Register;
