import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { name, form, label, disabled } = props;
    const { errors } = form;
    const hasError = !!errors[name];
    return (
        <div>
            <Controller
                name={name}
                control={form.control}
                as={TextField}
                fullWidth
                label={label}
                disabled={disabled}
                variant="outlined"
                margin="normal"
                error={hasError}
                helperText={errors[name]?.message}
            ></Controller>
        </div>
    );
}

export default InputField;
