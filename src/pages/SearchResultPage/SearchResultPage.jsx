import React from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../../components/ProductsList/ProductsList";
import Title from "../../components/Title/Title";
import img from "../../assets/other/sleepness.png";
import style from "./SearchResultPage.module.scss";

const SearchResultPage = () => {
    const location = useLocation();
    const { searchResults } = location.state || { searchResults: [] };

    if (searchResults.length === 0) {
        return (
            <div className={style.emptyContainer}>
                <Title text="No results found" />
                <img className={style.image} src={img} alt="No results" />
            </div>
        );
    }

    return (
        <div>
            <ProductList products={searchResults} />
        </div>
    );
};

export default SearchResultPage;
