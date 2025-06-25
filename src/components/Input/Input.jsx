import React from 'react';
import PropTypes from 'prop-types';
import style from './Input.module.scss';

const Input = ({ type, value, onChange, placeholder, name, required, readOnly }) => {
    return (
        <input
            className={style.input}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            required={required}
            readOnly={readOnly}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
};

Input.defaultProps = {
    placeholder: '',
    name: '',
    required: false,
    readOnly: false,
};

export default Input;
