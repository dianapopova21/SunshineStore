import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import style from "./OrderCard.module.scss";
import "./../../../styles/global.scss";

const OrderCard = ({ order, onEdit, onDelete }) => {
    return (
        <div key={order.id} className={style.orderCard}>
            <button
                onClick={() => onEdit(order.id)}
                className={`${style.iconButton} ${style.editButton}`}
                aria-label="Edit order"
            >
                <FaRegEdit />
            </button>
            <div className={style.orderDetails}>
                <p className={style.orderId}>Order ID: {order.id}</p>
                <div className={style.orderItems}>
                    <strong>Items:</strong>
                    <ul style={{ listStyleType: order.cartItems.length > 1 ? "disc" : "none", paddingLeft: order.cartItems.length > 1 ? "20px" : "0" }}>
                        {order.cartItems.map((item) => (
                            <li key={item.id || item.cartItemId}>
                                {item.name} (x{item.quantity}) - ${item.price.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>
                <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                <p className={style.orderId}>{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <button
                onClick={() => onDelete(order.id)}
                className={`${style.iconButton} ${style.deleteButton}`}
                aria-label="Delete order"
            >
                <FaRegTrashCan />
            </button>
        </div>
    );
};

export default OrderCard;
