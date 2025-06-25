import React, {useRef, useState} from 'react';
import style from "./MainPage.module.scss";
import MainCard from "../../components/Cards/MainCard/MainCard";
import Title from "../../components/Title/Title";
import categoriesData from '../../data/categoriesData.js';
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import mainImage from './../../assets/other/leon_kennedy.jpg';


const MainPage = () => {
    const [categories] = useState(categoriesData);

    const categoriesContainerRef = useRef(null);
    const scrollToCategories = () => {
        categoriesContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={style.main_page}>
            <MainCard
                image= {mainImage}
                title={"Emphasize your personality"}
                description={"Immerse yourself in the comfort of authentic style, " +
                    "where every purchase is an opportunity to express your " +
                    "view of fashion and emphasize your confidence. Welcome to the Sunshine Store - " +
                    "your style, your choice, your story."}
                btnText={"To the catalog"}
                btnAction={scrollToCategories}
            />
            <div ref={categoriesContainerRef}>
                <Title text="Categories"/>
                <CategoriesList categories={categories}/>
            </div>
        </div>
    );
};

export default MainPage;
