import React, {useEffect, useState} from "react";
import Title from "../../components/Title/Title";
import {useParams} from "react-router-dom";
import ProductList from "../../components/ProductsList/ProductsList";
import style from "./ProductPage.module.scss";
import Filters from "../../components/Filters/Filters";

const ProductPage = ( { products } ) => {
    const { category } = useParams();
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedSizes, setSelectedSizes] = useState([]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        scrollToTop();
    }, [category]);

    const categoryProducts = products.filter(product => product.category === category);

    const [filteredProducts, setFilteredProducts] = useState(categoryProducts);

    useEffect(() => {
        const categoryProducts = products.filter(product => product.category === category);
        setFilteredProducts(categoryProducts);
    }, [category, products]);

    const applyFilters = (filters) => {
        const filtered = categoryProducts.filter((product) => {
            let passesFilter = true;

            if (filters.minPrice !== '' && parseInt(product.price) < parseInt(filters.minPrice)) {
                passesFilter = false;
            }

            if (filters.maxPrice !== '' && parseInt(product.price) > parseInt(filters.maxPrice)) {
                passesFilter = false;
            }

            if (filters.selectedBrand !== '' && product.brand !== filters.selectedBrand) {
                passesFilter = false;
            }

            if (filters.selectedSizes.length > 0 && !filters.selectedSizes.every((size) => product.sizes.includes(size))) {
                passesFilter = false;
            }

            return passesFilter;
        });

        setFilteredProducts(filtered);
    };

    const clearFilters = () => {
        setFilteredProducts(products.filter(product => product.category === category));
        setMinPrice('');
        setMaxPrice('');
        setSelectedBrand('');
        setSelectedSizes([]);
    };

    return (
        <div className={style.product_page}>
            <div className={style.main_p_container}>
                <Filters
                    products={products}
                    applyFilters={applyFilters}
                    clearFilters={clearFilters}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    setSelectedBrand={setSelectedBrand}
                    setSelectedSizes={setSelectedSizes}
                />
                <div className={style.products_container}>
                    <Title text={category} />
                    <div>
                        <ProductList products={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;