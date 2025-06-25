import React from 'react';
import style from "./SelectorSizes.module.scss";

const SelectorSizes = ({
                           sizes,
                           selectedSize,
                           handleSizeChange,
                           multipleSelection = false
                       }) => {
    const handleChange = (event) => {
        const value = event.target.value;

        if (multipleSelection) {
            if (selectedSize.includes(value)) {
                handleSizeChange(selectedSize.filter((size) => size !== value));
            } else {
                handleSizeChange([...selectedSize, value]);
            }
        } else {
            handleSizeChange(value);
        }
    };

    return (
        <div className={style.radio_container}>
            {sizes.map((size) => (
                <label key={size} className={style.radio_label}>
                    <input
                        type={multipleSelection ? "checkbox" : "radio"}
                        name="size"
                        value={size}
                        onChange={handleChange}
                        checked={
                            multipleSelection
                                ? selectedSize.includes(size)
                                : selectedSize === size
                        }
                        className={style.radio_input}
                    />
                    <span className={style.radio_square}>{size}</span>
                </label>
            ))}
        </div>
    );
};

export default SelectorSizes;
