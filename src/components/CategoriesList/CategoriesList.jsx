import React from 'react';
import CategoryCard from "../Cards/CategoryCard/CategoryCard";
import style from "./CategoriesList.module.scss";

const CategoriesList = ({ categories }) => {
    return (
        <div className={style.categories_container}>
            {categories.map(category => (
                <CategoryCard key={category.id} title={category.title} image={category.image} />
            ))}
        </div>
    );
};

export default CategoriesList;