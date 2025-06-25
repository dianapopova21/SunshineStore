import React, { useState, useEffect } from 'react';
import ProductList from "../../components/ProductsList/ProductsList";
import Title from "../../components/Title/Title";
import img from './../../assets/other/sadness-face.png';
import style from "./FavProductsPage.module.scss";

const FavProductsPage = ({ products, user }) => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    const getFavoritesKey = (email) => `favorites_${email}`;

    useEffect(() => {
        if (user && user.email) {
            let storedFavorites = [];
            try {
                const favoritesKey = getFavoritesKey(user.email);
                storedFavorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];
            } catch (error) {
                console.error('Failed to parse favorites from localStorage:', error);
            }

            if (Array.isArray(products)) {
                const productList = storedFavorites
                    .map(id => products.find(p => p.id === id))
                    .filter(Boolean);

                setFavoriteProducts(productList);
            } else {
                console.error('Expected products to be an array, but got:', products);
            }
        } else {
            setFavoriteProducts([]);
        }
    }, [products, user]);

    return (
        <div>
            {favoriteProducts.length === 0 ? (
                <div className={style.emptyState}>
                    <Title text="You have no favorite products yet" />
                    <img src={img} alt="No favorite products" className={style.image} />
                </div>
            ) : (
                <>
                    <Title text="Your favourite products" />
                    <ProductList products={favoriteProducts} />
                </>
            )}
        </div>
    );
};

export default FavProductsPage;
