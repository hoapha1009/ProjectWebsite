import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Button.propTypes = {};

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLORS = ['primary', 'blue', 'red', 'green'];

function Button({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor,
}) {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;
    return (
        <button
            className={`brn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} onClick={onClick} type={type} `}
        >
            {children}
        </button>
    );
}

export default Button;