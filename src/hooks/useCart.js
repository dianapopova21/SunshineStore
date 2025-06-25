import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';

const useCart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showMessage, setShowMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const storedCart = user
            ? JSON.parse(localStorage.getItem(`cart_${user.email}`)) || []
            : JSON.parse(localStorage.getItem('cart')) || [];

        setCartItems(storedCart);
        calculateTotals(storedCart);
    }, [user]);

    const updateCart = (items) => {
        setCartItems(items);

        if (user) {
            localStorage.setItem(`cart_${user.email}`, JSON.stringify(items));
        } else {
            localStorage.setItem('cart', JSON.stringify(items));
        }

        window.location.reload();
    };


    const calculateTotals = (items) => {
        const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
        const totalCost = items.reduce((acc, item) => {
            const price = item.product?.price || 0;
            return acc + item.quantity * price;
        }, 0);

        setTotalItems(totalQuantity);
        setTotalPrice(Number(totalCost.toFixed(2)));
    };

    const decreaseQuantity = (cartItemId) => {
        const updatedCart = cartItems
            .map((item) => {
                if (item.cartItemId === cartItemId) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return null;
                }
                return item;
            })
            .filter((item) => item !== null);

        updateCart(updatedCart);
    };

    const increaseQuantity = (cartItemId) => {
        const updatedCart = cartItems.map((item) =>
            item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updatedCart);
    };

    const removeFromCart = (cartItemId) => {
        const updatedCart = cartItems.filter((item) => item.cartItemId !== cartItemId);
        updateCart(updatedCart);
    };

    const addToCart = (product, selectedSize) => {
        if (!product || selectedSize.length === 0) {
            setErrorMessage('Please select a size.');
            return;
        }

        const updatedCart = [...cartItems];
        const existingItemIndex = updatedCart.findIndex(
            (item) =>
                item.product.id === product.id &&
                JSON.stringify(item.selectedSize) === JSON.stringify(selectedSize)
        );

        if (existingItemIndex >= 0) {
            updatedCart[existingItemIndex].quantity += 1;
        } else {
            updatedCart.push({
                product,
                cartItemId: uuidv4(),
                quantity: 1,
                selectedSize,
            });
        }

        setShowMessage('Item added to cart!');
        setTimeout(() => setShowMessage(''), 3000);

        updateCart(updatedCart);
    };

    const clearCart = () => {
        updateCart([]);
        setShowMessage('Cart cleared!');
        setTimeout(() => setShowMessage(''), 3000);
    };

    return {
        cartItems,
        totalItems,
        totalPrice,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        showMessage,
        errorMessage,
        clearCart,
    };
};

export default useCart;
