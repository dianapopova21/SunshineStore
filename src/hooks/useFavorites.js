import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useFavorites = (id) => {
    const { user } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const getFavoritesKey = (email) => `favorites_${email}`;

    useEffect(() => {
        if (user && user.email) {
            const favoritesKey = getFavoritesKey(user.email);
            const storedFavorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];
            setFavorites(storedFavorites);
            setIsFavorite(storedFavorites.includes(id));
        } else {
            setFavorites([]);
            setIsFavorite(false);
        }
    }, [id, user]);

    const toggleFavorite = () => {
        if (!user) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
            return;
        }

        const favoritesKey = getFavoritesKey(user.email);

        setFavorites((prevFavorites) => {
            let updatedFavorites = [...prevFavorites];

            if (isFavorite) {
                updatedFavorites = updatedFavorites.filter(favId => favId !== id);
                setIsFavorite(false);
            } else {
                if (!updatedFavorites.includes(id)) {
                    updatedFavorites.push(id);
                }
                setIsFavorite(true);
            }

            localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
            window.location.reload();
            return updatedFavorites;
        });

        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };

    return {
        isFavorite,
        showMessage,
        toggleFavorite,
    };
};

export default useFavorites;
