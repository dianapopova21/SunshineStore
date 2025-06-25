import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './ProfilePage.module.scss';
import Title from "../../components/Title/Title";
import BtnOrange from "../../components/Buttons/BtnOrange/BtnOrange";

const ProfilePage = ({ user, handleLogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/authorization');
        }
    }, [user, navigate]);

    if (!user) {
        return null;
    }

    return (
        <div className={style.profile_page}>
            <Title text={`Hello, ${user.fullName}!`} />

            <p className={style.profile_p}>Email: {user.email}</p>

            <div className={style.profile_links}>
                <Link to="/favorites">My favorites</Link>
                <Link to="/cart">My cart</Link>
                <Link to="/orders">My orders</Link>
            </div>
            <BtnOrange text="Log out" onClick={handleLogout}/>
        </div>
    );
};

export default ProfilePage;
