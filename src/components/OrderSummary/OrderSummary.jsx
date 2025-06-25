import React from 'react';
import style from './OrderSummary.module.scss';
import BtnGreen from "../Buttons/BtnGreen/BtnGreen";

const OrderSummary = ({ totalItems, totalPrice, onClick }) => {
    return (
        <div className={style.summarySection}>
            <h3>Order summary</h3>
            <p>Total items: {totalItems}</p>
            <p>Total price: ${totalPrice || '0.00'}</p>
            <BtnGreen text={"Checkout"} onClick={onClick}/>
        </div>
    );
};

export default OrderSummary;
