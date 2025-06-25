import React from 'react';
import style from './CartCard.module.scss';
import useCart from "../../../hooks/useCart";

const CartCard = ({ product }) => {
    const { increaseQuantity, decreaseQuantity, cartItems } = useCart();

    const { cartItemId, product: productDetails, selectedSize } = product; // Деструктуризация для избавления от вложенностей
    const { image, name, price } = productDetails;

    const handleIncreaseQuantity = () => {
        increaseQuantity(cartItemId);
    };

    const handleDecreaseQuantity = () => {
        decreaseQuantity(cartItemId);
    };

    const currentProduct = cartItems.find(item => item.cartItemId === cartItemId);

    if (!currentProduct || currentProduct.quantity <= 0) return null;

    return (
        <div className={style.product_card}>
            <div className={style.top_border}></div>
            <div className={style.product_info}>
                <img src={image} alt={name} className={style.product_image} />
                <div className={style.details}>
                    <h3 className={style.product_name}>{name}</h3>
                    <p className={style.product_size}>Size: {selectedSize}</p>
                    <p className={style.product_price}>
                        {(price * currentProduct.quantity).toFixed(2)} $
                    </p>
                </div>
                <div>
                    <button className={style.plus_minus_btn} onClick={handleDecreaseQuantity}>-</button>
                    <span className={style.product_quantity}>{currentProduct.quantity}</span>
                    <button className={style.plus_minus_btn} onClick={handleIncreaseQuantity}>+</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
