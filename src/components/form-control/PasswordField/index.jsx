import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@material-ui/core';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

PasswordField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { name, form, label, disabled } = props;
    const { errors } = form;
    const hasError = !!errors[name];
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword((x) => !x);
    };
    return (
        <div>
            <FormControl
                error={hasError}
                fullWidth
                margin="normal"
                variant="outlined"
            >
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Controller
                    name={name}
                    control={form.control}
                    as={OutlinedInput}
                    label={label}
                    disabled={disabled}
                    error={hasError}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <MdVisibility />
                                ) : (
                                    <MdVisibilityOff />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                ></Controller>
                <FormHelperText error={hasError}>
                    {errors[name]?.message}
                </FormHelperText>
            </FormControl>
        </div>
    );
}

export default PasswordField;
