import React, { useContext, useState } from 'react';
import style from './ProductInfo.module.scss';
import "../../styles/global.scss"
import BtnGreen from "../Buttons/BtnGreen/BtnGreen";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import useFavorites from '../../hooks/useFavorites';
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../context/AuthContext";
import { useNotify } from '../../hooks/useNotify';
import SelectorSizes from "../SelectorSizes/SelectorSizes";
import { useNavigate } from 'react-router-dom';

const ProductInfo = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState("");
    const { toggleFavorite, isFavorite } = useFavorites(product.id);
    const { addToCart } = useCart();
    const { user } = useContext(AuthContext);
    const { addNotification, showErrorMessage, notifications, errorMessage } = useNotify();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!user?.email) {
            showErrorMessage("Please log in to add items to your cart.");
            return;
        }
        if (!selectedSize) {
            showErrorMessage("Please select a size before adding to cart.");
            return;
        }
        addToCart(product, selectedSize);
        addNotification("Item added to cart successfully!", "success");
    };

    const handleBuyNow = () => {
        if (!selectedSize) {
            showErrorMessage("Please select a size before purchasing.");
            return;
        }
        const checkoutItem = {
            id: product.id,
            name: product.name,
            category: product.category,
            brand: product.brand,
            description: product.description,
            size: selectedSize,
            price: product.price,
            image: product.image,
            quantity: 1,
        };

        localStorage.setItem("checkoutProduct", JSON.stringify([checkoutItem]));
        addNotification("Proceeding to checkout", "success");
        navigate('/checkout');
    };

    return (
        <div className={style.productCard}>
            <div className={style.productContent}>
                <div className={style.productImage}>
                    <img className={style.img} src={product.image} alt={product.name} />
                </div>
                <div className={style.productDetails}>
                    <div>
                        <h3 className={style.title}>{product.name}</h3>
                        <p>Brand: {product.brand}</p>
                        <p>Price: ${product.price}</p>
                        <div>
                            <p>Sizes:</p>
                            <SelectorSizes
                                sizes={product.sizes}
                                selectedSize={selectedSize}
                                handleSizeChange={(value) => setSelectedSize(value)}
                            />

                        </div>
                        {errorMessage && (
                            <p className="error_message">{errorMessage}</p>
                        )}
                        <div className={style.btnContainer}>
                            <BtnGreen onClick={handleBuyNow} text="Buy now" />
                            <p className={style.favoriteIcon} onClick={toggleFavorite}>
                                {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
                            </p>
                            <p className={style.cartIcon} onClick={handleAddToCart}>
                                <IoCartOutline />
                            </p>
                        </div>
                    </div>
                    <div className={style.productDescription}>
                        <p>Description:</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
            {notifications.map(({ id, message, type }) => (
                <div key={id} className={`$ notification }`}>
                    {message}
                </div>
            ))}
        </div>
    );
};

export default ProductInfo;
