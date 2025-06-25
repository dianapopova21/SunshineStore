import ProductCard from "../Cards/ProductCard/ProductCard";
import style from "./ProductsList.module.scss";
import { Link } from 'react-router-dom';
import { GoChevronLeft, GoChevronRight  } from "react-icons/go";
import usePagination from "../../hooks/usePagination";

const ProductList = ({ products }) => {

    const itemsPerPage = 6;
    const { page, totalPages, goToPreviousPage, goToNextPage } = usePagination(itemsPerPage, products.length);
    const startIndex = (page - 1) * itemsPerPage;
    const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className={style.pagination_container}>
            <div className={style.product_container}>
                {visibleProducts.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`} className={style.product_link} >
                        <ProductCard id={product.id} title={product.name} image={product.image} price={product.price} />
                    </Link>
                ))}
            </div>
            <div className={style.pagination_buttons}>
                <button onClick={goToPreviousPage} disabled={page === 1}>
                    <GoChevronLeft className={style.chevron_icon} />
                </button>
                <span className={style.pagination_text}>{page} of {totalPages}</span>
                <button onClick={goToNextPage} disabled={page === totalPages}>
                    <GoChevronRight className={style.chevron_icon} />
                </button>
            </div>
        </div>
    );
};

export default ProductList;
