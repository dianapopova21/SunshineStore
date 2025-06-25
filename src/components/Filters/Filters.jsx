import React, { useState } from 'react';
import style from "./Filters.module.scss";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import BtnGreen from "../Buttons/BtnGreen/BtnGreen";
import SelectorSizes from "../SelectorSizes/SelectorSizes";

const Filters = ({ applyFilters, clearFilters }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleBrandChange = (brand) => {
        setSelectedBrand(brand);
    };

    const handleApplyFilters = () => {
        applyFilters({ minPrice, maxPrice, selectedBrand, selectedSizes });
    };

    const handleClearFilters = () => {
        clearFilters();
        setMinPrice('');
        setMaxPrice('');
        setSelectedBrand('');
        setSelectedSizes([]);
    };

    return (
        <div className={style.filters_container}>
            <div className={style.filter_header}>
                <h3>Filters</h3>
            </div>
            <p>Price</p>
            <div className={style.price_section}>
                <input type="number" value={minPrice} onChange={handleMinPriceChange} />
                <p>-</p>
                <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
            </div>
            <div className={style.filter_divider}></div>
            <div>
                <p>Brand</p>
                <DropdownSelect
                    options={['Bright Weave', 'Golden Bloom', 'Luma Trend']}
                    value={selectedBrand}
                    onChange={handleBrandChange}
                    placeholder="Select a brand"
                />
            </div>
            <div className={style.filter_divider}></div>
            <div>
                <p>Sizes</p>
                <SelectorSizes
                    sizes={['XS', 'S', 'M', 'L', 'XL']}
                    selectedSize={selectedSizes}
                    handleSizeChange={(values) => setSelectedSizes(values)}
                    multipleSelection={true}
                />
            </div>
            <div className={style.filter_divider}></div>
            <BtnGreen text="Apply" onClick={handleApplyFilters} />
            <button className={style.clear_btn} onClick={handleClearFilters}>Clear filters</button>
        </div>
    );
};

export default Filters;
