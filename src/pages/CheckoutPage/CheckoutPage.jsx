import React, { useEffect, useState } from "react";
import style from "./CheckoutPage.module.scss";
import BtnGreen from "../../components/Buttons/BtnGreen/BtnGreen";
import CheckoutCard from "../../components/Cards/CheckoutCard/CheckoutCard";
import DropdownSelect from "../../components/DropdownSelect/DropdownSelect";
import Input from "../../components/Input/Input";
import { useNavigate, useParams } from "react-router-dom";
import { useNotify } from "../../hooks/useNotify";

const CheckoutPage = ({ user }) => {
    const [cartItems, setCartItems] = useState([]);
    const { orderId } = useParams();
    const navigate = useNavigate();
    const { showErrorMessage } = useNotify();

    const countries = ["Ukraine", "Poland", "Germany", "USA", "Italy"];

    const [formData, setFormData] = useState({
        fullName: user?.fullName || "",
        phone: user?.phone || "",
        email: user?.email || "",
        address: {
            city: "",
            street: "",
            house: "",
            zip: "",
            country: user?.country || "",
        },
        paymentMethod: "",
    });

    const [errors, setErrors] = useState({
        fullName: false,
        phone: false,
        email: false,
        address: {
            city: false,
            street: false,
            house: false,
            zip: false,
            country: false,
        },
        paymentMethod: false,
    });

    useEffect(() => {
        if (!user) {
            navigate("/authorization");
            return;
        }

        if (orderId) {
            const savedOrders = JSON.parse(localStorage.getItem(`orders_${user.email}`)) || [];
            const currentOrder = savedOrders.find(order => order.id === parseInt(orderId, 10));

            if (currentOrder) {
                setCartItems(currentOrder.cartItems);
                setFormData(currentOrder.formData);
            } else {
                console.error("Order not found");
                navigate("/checkout");
            }
        } else {
            const storedItems = localStorage.getItem("checkoutProduct");
            if (storedItems) {
                try {
                    setCartItems(JSON.parse(storedItems));
                } catch (error) {
                    console.error("Failed to parse checkoutProduct:", error);
                }
            }
        }
    }, [orderId, user, navigate]);

    const handleChange = (field, value) => {
        if (field.includes("address.")) {
            const addressField = field.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                address: { ...prev.address, [addressField]: value },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [field]: value }));
        }
    };

    const handlePaymentChange = (method) => {
        setFormData((prev) => ({ ...prev, paymentMethod: method }));
    };

    const validateForm = () => {
        const newErrors = {
            fullName: !formData.fullName,
            phone: !formData.phone,
            email: !formData.email,
            address: {
                city: !formData.address.city,
                street: !formData.address.street,
                house: !formData.address.house,
                zip: formData.address.zip.length !== 5, // Проверяем длину ZIP
                country: !formData.address.country,
            },
            paymentMethod: !formData.paymentMethod,
        };

        setErrors(newErrors);
        return Object.values(newErrors).some((error) => error === true);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            showErrorMessage("Please fill out all required fields.");
            return;
        }

        const order = {
            id: orderId ? parseInt(orderId, 10) : Date.now(),
            userId: user?.id || "guest",
            cartItems,
            formData,
            total,
            date: new Date().toISOString(),
        };

        const userOrdersKey = `orders_${user.email}`;
        const savedOrders = JSON.parse(localStorage.getItem(userOrdersKey)) || [];

        if (orderId) {
            const orderIndex = savedOrders.findIndex(existingOrder => existingOrder.id === parseInt(orderId, 10));
            if (orderIndex !== -1) {
                savedOrders[orderIndex] = order;
                localStorage.setItem(userOrdersKey, JSON.stringify(savedOrders));
            } else {
                console.error("Order ID not found for editing.");
            }
        } else {
            savedOrders.push(order);
            localStorage.setItem(userOrdersKey, JSON.stringify(savedOrders));

            // Очистка корзины после оформления заказа
            const cartKey = `cart_${user.email}`;
            localStorage.removeItem(cartKey);

            setCartItems([]);
        }
        navigate("/orders");
    };

    const total = cartItems.reduce((acc, item) => {
        const price = item?.price || 0;
        const quantity = item?.quantity || 1;
        return acc + price * quantity;
    }, 0);

    if (!cartItems.length) {
        return <p>Your cart is empty. Please add items to proceed.</p>;
    }

    return (
        <div className={style.checkout_container}>
            <div className={style.checkout_left}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="fullName"
                        placeholder="Your name"
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        disabled={!!user?.fullName}
                    />
                    {errors.fullName && <p className={style.error}>Please enter your full name.</p>}
                    <Input
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        readOnly
                    />
                    {errors.phone && <p className={style.error}>Please enter your phone number.</p>}
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        readOnly
                    />
                    {errors.email && <p className={style.error}>Please enter your email.</p>}
                    <DropdownSelect
                        options={countries}
                        value={formData.address.country || ""}
                        onChange={(country) => handleChange("address.country", country)}
                        placeholder="Country"
                    />
                    {errors.address.country && <p className={style.error}>Please select your country.</p>}

                    <div>
                        <Input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.address.city}
                            onChange={(e) => handleChange("address.city", e.target.value)}
                        />
                        {errors.address.city && <p className={style.error}>Please enter your city.</p>}
                        <Input
                            type="text"
                            name="street"
                            placeholder="Street"
                            value={formData.address.street}
                            onChange={(e) => handleChange("address.street", e.target.value)}
                        />
                        {errors.address.street && <p className={style.error}>Please enter your street.</p>}
                        <Input
                            type="text"
                            name="house"
                            placeholder="House number"
                            value={formData.address.house}
                            onChange={(e) => handleChange("address.house", e.target.value)}
                        />
                        {errors.address.house && <p className={style.error}>Please enter your house number.</p>}
                        <Input
                            type="text"
                            name="zip"
                            placeholder="ZIP code"
                            value={formData.address.zip}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, ""); // Оставляем только цифры
                                if (value.length <= 5) {
                                    handleChange("address.zip", value);
                                }
                            }}
                        />
                        {formData.address.zip && formData.address.zip.length !== 5 && <p className={style.error}>Please enter exactly 5 digits for the ZIP code.</p>}


                    </div>
                    <div className={style.payment_block}>
                        <p>Select payment method:</p>
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="creditCard"
                                checked={formData.paymentMethod === "creditCard"}
                                onChange={() => handlePaymentChange("creditCard")}
                            />
                            Credit Card
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                checked={formData.paymentMethod === "paypal"}
                                onChange={() => handlePaymentChange("paypal")}
                            />
                            PayPal
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cash"
                                checked={formData.paymentMethod === "cash"}
                                onChange={() => handlePaymentChange("cash")}
                            />
                            Cash on Delivery
                        </label>
                    </div>
                    {errors.paymentMethod && <p className={style.error}>Please select a payment method.</p>}
                    <BtnGreen text={orderId ? "Update Order" : "Submit"} />
                </form>
            </div>
            <div className={style.checkout_right}>
                <h2>Your order</h2>
                <div className={style.checkout_items}>
                    {cartItems.map((item) => (
                        <CheckoutCard key={item.cartItemId || item.id} product={item} />
                    ))}
                </div>
                <div className={style.checkout_summary}>
                    <p>Total: ${total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
