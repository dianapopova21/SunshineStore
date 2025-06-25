import React, { useEffect, useState } from "react";
import style from "./OrdersPage.module.scss";
import OrderCard from "../../components/Cards/OrderCard/OrderCard";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import img from "../../assets/other/sad-face.png";

const OrdersPage = ({ user }) => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/authorization");
            return;
        }

        const userOrdersKey = `orders_${user.email}`;
        const savedOrders = JSON.parse(localStorage.getItem(userOrdersKey)) || [];
        setOrders(savedOrders);
    }, [user, navigate]);

    const handleDeleteOrder = (orderId) => {
        const updatedOrders = orders.filter(order => order.id !== orderId);
        setOrders(updatedOrders);

        const userOrdersKey = `orders_${user.email}`;
        localStorage.setItem(userOrdersKey, JSON.stringify(updatedOrders));
    };

    const handleEditOrder = (orderId) => {
        navigate(`/checkout/${orderId}`);
    };

    if (!orders.length) {
        return (
            <div className={style.emptyOrders}>
                <Title text="You have no orders yet" />
                <img className={style.image} src={img} alt="No orders" />
            </div>
        );
    }

    return (
        <div>
            <Title text="Your orders" />
            <div>
                {orders.map(order => (
                    <OrderCard
                        key={order.id}
                        order={order}
                        onEdit={() => handleEditOrder(order.id)}
                        onDelete={() => handleDeleteOrder(order.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default OrdersPage;
