import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import style from "./ProductInfoPage.module.scss";
import Title from "../../components/Title/Title";
import img from "../../assets/other/weird.png";

const ProductInfoPage = ({ products }) => {
    const { productId } = useParams();
    const productRef = useRef(null);

    const product = products.find(product => String(product.id) === String(productId));

    useEffect(() => {
        if (productRef.current) {
            productRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [productId]);

    if (!product) {
        return (
            <div className={style.emptyState}>
                <Title text="Product not found :(" />
                <img className={style.image} src={img} alt="Product not found" />
            </div>
        );
    }

    return (
        <div ref={productRef}>
            <ProductInfo product={product} />
        </div>
    );
};

export default ProductInfoPage;
