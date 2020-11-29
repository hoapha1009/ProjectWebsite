import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import InputField from 'components/form-control/InputField';
import PasswordField from 'components/form-control/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',
        padding: theme.spacing(2),
        width: '500px',
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        margin: theme.spacing(2, 0, 2),
        textAlign: 'center',
        fontWeight: 'bold',
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,
    },
}));

function RegisterForm({ onSubmit }) {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Enter your full name!')
            .test(
                'Should has at least 2 words',
                'Enter at least 2 words!',
                (value) => {
                    return value.split(' ').length >= 2;
                }
            ),
        email: yup
            .string()
            .required('Enter your email!')
            .email('Enter a valid email!'),
        password: yup
            .string()
            .required('Enter your password!')
            .matches(
                regex,
                'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character!'
            ),
        retypePassword: yup
            .string()
            .required('Confirm password!')
            .oneOf([yup.ref('password')], 'Passwords dont match!'),
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });
    const { isSubmitting } = form.formState;
    const classes = useStyle();

    const handleFormSubmit = async (values) => {
        if (!onSubmit) return;
        await onSubmit(values);
    };
    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h3" className={classes.title}>
                Sign up
            </Typography>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <InputField name="fullName" label="Full name: " form={form} />
                <InputField name="email" label="Email: " form={form} />
                <PasswordField name="password" label="Password: " form={form} />
                <PasswordField
                    name="retypePassword"
                    label="Confirm Password: "
                    form={form}
                />
                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"
                >
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
