import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import CartCard from "../../components/Cards/CartCard/CartCard";
import useCart from "../../hooks/useCart";
import style from './CartPage.module.scss';
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import img from "../../assets/other/sadness-face2.png";

const CartPage = () => {
    const {
        cartItems,
        totalItems,
        totalPrice,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        message
    } = useCart();

    const navigate = useNavigate();

    const handleRemoveFromCart = useCallback((cartItemId) => {
        removeFromCart(cartItemId);
    }, [removeFromCart]);

    const handleIncreaseQuantity = useCallback((cartItemId) => {
        increaseQuantity(cartItemId);
    }, [increaseQuantity]);

    const handleDecreaseQuantity = useCallback((cartItemId) => {
        decreaseQuantity(cartItemId);
    }, [decreaseQuantity]);

    const handleClearCart = () => {
        clearCart();
    };

    const handleCheckout = () => {
        if (!cartItems.length) {
            alert("Your cart is empty!");
            return;
        }

        const flatCartItems = cartItems.map(item => ({
            ...item.product,
            quantity: item.quantity,
            cartItemId: item.cartItemId,
            size: item.selectedSize
        }));

        localStorage.setItem("checkoutProduct", JSON.stringify(flatCartItems));

        navigate("/checkout");
    };

    if (cartItems.length === 0) {
        return (
            <div className={style.emptyCart}>
                <Title text="Your cart is empty" />
                <img className={style.image} src={img} alt="Empty cart" />
            </div>
        );
    }

    return (
        <div className={style.cartPage}>
            <Title text="Your cart" />
            {message && <div>{message}</div>}

            <div className={style.cartContent}>
                <div className={style.cartItemsSection}>
                    {cartItems.length > 0 && (
                        <div className={style.clearCartButton}>
                            <span onClick={handleClearCart}>Clear cart</span>
                        </div>
                    )}

                    {cartItems.map((item) => (
                        <CartCard
                            key={item.cartItemId}
                            product={item}
                            onRemove={() => handleRemoveFromCart(item.cartItemId)}
                            onIncrease={() => handleIncreaseQuantity(item.cartItemId)}
                            onDecrease={() => handleDecreaseQuantity(item.cartItemId)}
                        />
                    ))}
                </div>

                <div className={style.orderSummarySection}>
                    <OrderSummary totalItems={totalItems} totalPrice={totalPrice} onClick={handleCheckout} />
                </div>
            </div>
        </div>
    );
};

export default CartPage;
