import React from 'react';
import PropTypes from 'prop-types';
import style from './CategoryCard.module.scss';
import {Link} from "react-router-dom";

const CategoryCard = ({ id, title, image }) => {
    return (
        <div className={style.category_card}>
            <Link to={`/products/${title.toLowerCase()}`} className={style.link} >
                <img src={image} alt={title} className={style.category_image} />
                <p className={style.category_title}>{title}</p>
            </Link>

        </div>
    );
};

CategoryCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default CategoryCard;
