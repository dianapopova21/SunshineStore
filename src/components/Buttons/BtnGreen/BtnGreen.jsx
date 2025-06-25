import React from 'react';
import style from './BtnGreen.module.scss';

const BtnGreen = ({ text, onClick }) => {
    return (
        <button className={style.green_button} onClick={onClick}>
            {text}
        </button>
    );
};

export default BtnGreen;
