import { useState } from 'react';

export const useNotify = () => {
    const [notifications, setNotifications] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const addNotification = (message, type = 'success') => {
        const id = Date.now();
        setNotifications((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setNotifications((prev) => prev.filter((notification) => notification.id !== id));
        }, 3000);
    };

    const showErrorMessage = (message) => {
        setErrorMessage(message);
        setTimeout(() => {
            setErrorMessage('');
        }, 5000);
    };

    return {
        notifications,
        addNotification,
        errorMessage,
        showErrorMessage,
    };
};
