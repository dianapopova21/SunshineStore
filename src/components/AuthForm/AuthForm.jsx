import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import style from "./AuthForm.module.scss";

const AuthForm = ({ setUser }) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2
                    className={isLogin ? "" : style.active_tab}
                    onClick={() => setIsLogin(false)}
                >
                    Sign Up
                </h2>
                <h2
                    className={isLogin ? style.active_tab : ""}
                    onClick={() => setIsLogin(true)}
                >
                    Log In
                </h2>
                <div
                    className={style.indicator}
                    style={{
                        transform: `translateX(${isLogin ? "64%" : "-60%"})`,
                    }}
                ></div>
            </div>

            {isLogin ? <LoginForm setUser={setUser}/> : <RegistrationForm />}
        </div>
    );
};

export default AuthForm;
