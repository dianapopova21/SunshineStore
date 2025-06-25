import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const usePagination = (itemsPerPage, totalItems) => {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get('page');
    const page = parseInt(pageParam, 10) || 1;

    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    useEffect(() => {
        if (page > totalPages && totalPages > 0) {
            searchParams.set('page', totalPages);
            navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
        } else if (page < 1) {
            searchParams.set('page', '1');
            navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
        }
    }, [page, totalPages, location.pathname, searchParams, navigate]);

    const goToPage = (pageNumber) => {
        const newPage = Math.max(1, Math.min(totalPages, pageNumber));
        searchParams.set('page', newPage.toString());
        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    const goToPreviousPage = () => {
        if (page > 1) goToPage(page - 1);
    };

    const goToNextPage = () => {
        if (page < totalPages) goToPage(page + 1);
    };

    return { page, totalPages, goToPage, goToPreviousPage, goToNextPage };
};

export default usePagination;
