import React, { useContext, useState, useEffect } from 'react';
import style from './Header.module.scss';
import GreenBlock from "../GreenBlock/GreenBlock";
import CategoriesHeader from "../CategoriesHeader/CategoriesHeader";
import { GoSearch, GoPerson } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import useSearch from './../../hooks/useSearch';
import { IoBagOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import data from "./../../data/categoriesData";

const Header = ({ products }) => {
    const { user } = useContext(AuthContext);
    const { searchResults, searchProducts } = useSearch(products);
    const [query, setQuery] = useState('');
    const [searchInitiated, setSearchInitiated] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchClick = () => {
        searchProducts(query);
        setSearchInitiated(true);
    };

    useEffect(() => {
        if (searchInitiated) {
            navigate('/search-results', { state: { searchResults } });
            setSearchInitiated(false);
        }
    }, [searchResults, searchInitiated, navigate]);

    const goToProfile = () => {
        if (user) {
            navigate('/profile');
        } else {
            navigate('/authorization');
        }
    };

    const handleLinkClick = (path) => {
        if (user) {
            navigate(path);
        } else {
            navigate('/authorization');
        }
    };

    return (
        <>
            <GreenBlock />
            <div className={style.header}>
                <div className={style.search_bar}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearchClick();
                            }
                        }}
                    />
                    <i onClick={handleSearchClick}>
                        <GoSearch />
                    </i>
                </div>

                <h1 className={style.store_name}>
                    <Link to="/" className={style.store_name}>
                        Sunshine Store
                    </Link>
                </h1>

                <div className={style.action_icons}>
                    <i onClick={() => handleLinkClick('/favorites')}>
                        <IoMdHeartEmpty />
                    </i>
                    <i onClick={() => handleLinkClick('/cart')}>
                        <IoCartOutline />
                    </i>
                    <i onClick={() => handleLinkClick('/orders')}>
                        <IoBagOutline />
                    </i>
                    <i onClick={goToProfile} className={style.profile_icon}>
                        <GoPerson />
                        {user && <FaCheckCircle className={style.check_icon} />}
                    </i>
                </div>
            </div>
            <CategoriesHeader categories={data}/>
        </>
    );
};

export default Header;
