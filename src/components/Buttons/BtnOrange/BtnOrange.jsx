import React from 'react';
import style from './BtnOrange.module.scss';

const Button = ({ text, onClick }) => {
    return (
        <button className={style.orange_button} onClick={onClick}>{text}</button>
    );
};

export default Button;
