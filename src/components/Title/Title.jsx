import React from 'react';
import style from "./Title.module.scss"

const Title = ({ text }) => {
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    return (
        <div className={style.title}>
            <h2>{capitalizedText}</h2>
        </div>
    );
};

export default Title;
