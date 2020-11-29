import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import { login } from '../userSlice';

Login.propTypes = {
    onCloseDiaLog: PropTypes.func,
};

function Login({ onCloseDiaLog }) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleFormSubmit = async (values) => {
        try {
            const action = login(values);
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
            <LoginForm onSubmit={handleFormSubmit} />
        </div>
    );
}

export default Login;
