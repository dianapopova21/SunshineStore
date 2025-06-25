import React from 'react';
import style from "./MainCard.module.scss"
import BtnOrange from "../../Buttons/BtnOrange/BtnOrange";

const MainCard = ({image, title, description, btnText, btnAction}) => {
    return (
        <div className={style.card_container}>
            <div className={style.big_card}>
                <div className={style.image_container}>
                    <img src={image} alt={title} />
                </div>
                <div className={style.text_container}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <BtnOrange text={btnText} onClick={btnAction}></BtnOrange>
                </div>
            </div>
        </div>
    );
};

export default MainCard;
