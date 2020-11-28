import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    onCloseDialog: PropTypes.func,
};

function Register(props) {
    const handleFormSubmit = (values) => {
        console.log('Form submit: ', values);
    };
    return (
        <div>
            <RegisterForm onSubmit={handleFormSubmit} />
        </div>
    );
}

export default Register;
