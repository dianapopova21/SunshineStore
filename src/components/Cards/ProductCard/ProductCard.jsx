import React, { useContext } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import style from './ProductCard.module.scss';
import useFavorites from '../../../hooks/useFavorites';
import { AuthContext } from '../../../context/AuthContext';

const ProductCard = ({ id, title, price, image, onProductClick }) => {
    const { isFavorite, showMessage, toggleFavorite } = useFavorites(id);
    const { user } = useContext(AuthContext);

    const handleCardClick = (e) => {
        if (!e.target.closest(`.${style.favorite_icon}`)) {
            if (onProductClick) {
                onProductClick(id);
            }
        }
    };

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleFavorite();
    };

    return (
        <div className={style.product_card} onClick={handleCardClick}>
            <div className={style.product_info}>
                <div className={style.favorite_icon} onClick={handleFavoriteClick}>
                    {isFavorite ? <IoMdHeart color="#FF0000" /> : <IoMdHeartEmpty />}
                </div>
                <img src={image} alt={title} />
                <p>{title}</p>
                <p>${price}</p>
            </div>
            {showMessage && (
                <div className={style.message}>
                    {user
                        ? (isFavorite ? 'Added to favorites' : 'Removed from favorites')
                        : 'Please log in to add items to favorites'}
                </div>
            )}
        </div>
    );
};

export default ProductCard;
