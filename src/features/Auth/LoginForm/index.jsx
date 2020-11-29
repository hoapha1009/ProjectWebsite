import { yupResolver } from '@hookform/resolvers/yup';
import {
    Avatar,
    Button,
    LinearProgress,
    makeStyles,
    Typography,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import InputField from 'components/form-control/InputField';
import PasswordField from 'components/form-control/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

LoginForm.propTypes = {
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

function LoginForm({ onSubmit }) {
    const schema = yup.object().shape({
        identifier: yup.string().required('Enter your username!'),
        password: yup.string().required('Enter your password!'),
    });
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
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
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avatar}>
                <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h3" className={classes.title}>
                Log in
            </Typography>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <InputField name="identifier" label="Email: " form={form} />
                <PasswordField name="password" label="Password: " form={form} />
                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"
                >
                    Log in
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
