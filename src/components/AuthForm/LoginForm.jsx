import React, { useState, useContext } from "react";
import style from "./AuthForm.module.scss";
import BtnGreen from "../Buttons/BtnGreen/BtnGreen";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import Input from "../Input/Input";

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { success, message } = login(formData.email, formData.password);

        setMessage(message);
        setIsError(!success);

        if (success) {
            setFormData({ email: "", password: "" });
        }
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <Input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <div className={style.password_container}>
                <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={style.eye_button}
                >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
            </div>
            <BtnGreen text="Log in" />
            {message && (
                <p className={isError ? style.error_message : style.success_message}>
                    {message}
                </p>
            )}
        </form>
    );
};


export default LoginForm;
