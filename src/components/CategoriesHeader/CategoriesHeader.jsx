import React from 'react';
import style from './CategoriesHeader.module.scss';
import { Link } from 'react-router-dom';

const CategoryMenu = ({ categories }) => {
    return (
        <div className={style.category_menu}>
            <div className={style.category_divider} />
            <ul className={style.category_list}>
                {categories.map(category => (
                    <Link key={category.id} to={`/products/${category.title.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                        <li>{category.title}</li>
                    </Link>
                ))}
            </ul>
            <div className={style.category_divider} />
        </div>
    );
};

export default CategoryMenu;
