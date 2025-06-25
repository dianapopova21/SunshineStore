import React, { useState, useEffect, useRef } from "react";
import "./DropdownSelect.scss";
import { IoIosArrowDown } from "react-icons/io";

const DropdownSelect = ({ options, onChange, value, placeholder = "Select" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelect = (option) => {
        onChange(option); // Передаем выбранную страну в родительский компонент
        setIsOpen(false); // Закрываем список после выбора
    };

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Закрытие выпадающего списка, если клик был вне компонента
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`dropdown-select ${isOpen ? "open" : ""}`} ref={dropdownRef}>
            <div className="select-header" onClick={toggleDropdown}>
                <span>{value || placeholder}</span>
                <IoIosArrowDown className={`arrow-icon ${isOpen ? "rotated" : ""}`} />
            </div>
            {isOpen && options.length > 0 && (
                <ul className="options-list">
                    {options.map((option) => (
                        <li key={option} onClick={() => handleSelect(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
            {isOpen && options.length === 0 && <div className="no-options">No options available</div>}
        </div>
    );
};

export default DropdownSelect;
