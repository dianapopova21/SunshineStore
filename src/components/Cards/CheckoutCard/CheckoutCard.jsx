import React from 'react';
import style from './CheckoutCard.module.scss';

const CheckoutCard = ({ product }) => {
    return (
        <div className={style.product_card}>
            <div className={style.top_border}></div>
            <div className={style.product_info}>
                <img src={product.image} alt={product.name} className={style.product_image} />
                <div className={style.details}>
                    <h3 className={style.product_name}>{product.name}</h3>
                    <p className={style.product_size}>Size: {product.size || 'N/A'}</p>
                    <p className={style.product_price}>
                        {(product.price * (product.quantity || 1)).toFixed(2)} $
                    </p>
                    <p className={style.product_size}>x {product.quantity || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};


export default CheckoutCard;
