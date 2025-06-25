import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import style from "./AuthForm.module.scss";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import BtnGreen from "../Buttons/BtnGreen/BtnGreen";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Input from "../Input/Input";

const RegistrationForm = () => {
    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        country: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const countries = ["Ukraine", "Poland", "Germany", "USA", "Italy"];

    const validateForm = () => {
        const { fullName, phone, email, country, password } = formData;

        if (!fullName || !phone || !email || !country || !password) {
            return "All fields must be filled.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Invalid email format.";
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*[\d!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            return "Password must be at least 8 characters long, contain letters and at least one digit or special character.";
        }

        const phoneRegex = /^\+\d+$/;
        if (!phoneRegex.test(phone)) {
            return "Phone number must start with '+' and contain only digits.";
        }

        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            setSuccessMessage("");
            return;
        }

        const result = register(formData);
        if (!result.success) {
            setErrorMessage(result.message);
            setSuccessMessage("");
            return;
        }

        setErrorMessage("");
        setSuccessMessage("Registration successful! You can now log in.");
        setFormData({ fullName: "", phone: "", email: "", country: "", password: "" });
    };

    return (
        <form className={style.form} onSubmit={handleSubmit} noValidate>
            <Input
                type="text"
                name="fullName"
                placeholder="Your name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={style.input}
            />
            <Input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => {
                    const sanitizedValue = e.target.value.replace(/[^\d]/g, ""); // Убираем все символы, кроме цифр
                    setFormData({ ...formData, phone: `+${sanitizedValue}` });
                }}
                className={style.input}
            />
            <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={style.input}
            />
            <DropdownSelect
                options={countries}
                value={formData.country}
                onChange={(country) => setFormData({ ...formData, country })}
                placeholder="Country"
            />
            <div className={style.password_container}>
                <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={style.input}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={style.eye_button}
                >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
            </div>
            <BtnGreen text="Sign up" />
            {errorMessage && <p className={style.error_message}>{errorMessage}</p>}
            {successMessage && <p className={style.success_message}>{successMessage}</p>}
        </form>
    );
};

export default RegistrationForm;
