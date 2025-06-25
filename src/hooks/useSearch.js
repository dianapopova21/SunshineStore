import { useState } from 'react';

const useSearch = (productsData) => {
    const [searchResults, setSearchResults] = useState([]);

    const searchProducts = (query) => {
        const trimmedQuery = query.trim();
        if (trimmedQuery === '' || !productsData) {
            setSearchResults([]);
        } else {
            const filteredProducts = productsData.filter((product) =>
                product.name.toLowerCase().includes(trimmedQuery.toLowerCase())
            );
            setSearchResults(filteredProducts);
        }
    };

    return { searchResults, searchProducts };
};

export default useSearch;
