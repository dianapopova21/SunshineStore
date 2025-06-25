import React from 'react';
import style from "./Footer.module.scss";
import Title from "../Title/Title";
import GreenBlock from "../GreenBlock/GreenBlock";

const Footer = () => {
    return (
        <div>
            <footer className={style.footer}>
                <Title text="Sunshine Store"/>
                <div className={style.contact_info}>
                    <p className={style.footer_title}>Contact Information</p>
                    <p>Phone number: +0 (000) 000 00 00</p>
                    <p>Email: info@sunshinestore.com</p>
                    <p>Address: 123 Main Street, Ukraine</p>
                    <p>Emoji by @Yogs144</p>
                </div>
            </footer>
            <GreenBlock/>
        </div>
    );
};

export default Footer;