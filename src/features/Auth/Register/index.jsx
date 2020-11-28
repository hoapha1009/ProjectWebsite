import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    onCloseDialog: PropTypes.func,
};

function Register(props) {
    return (
        <div>
            Register form:
            <RegisterForm />
        </div>
    );
}

export default Register;
