import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage"
import ProductPage from "./pages/ProductsPage/ProductPage";
import productsData from "./data/productsData";
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import Header from "./components/Header/Header";
import FavProductsPage from "./pages/FavProductsPage/FavProductsPage";
import CartPage from "./pages/CartPage/CartPage"
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import {AuthContext, AuthProvider} from "./context/AuthContext";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
    const { user, logout, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <Router>
                <Header
                    user={user}
                    handleLogout={logout}
                    products={productsData}
                />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/products/:category" element={<ProductPage products={productsData} />}/>
                    <Route path="/product/:productId" element={<ProductInfoPage products={productsData}/>}/>
                    <Route path="/search-results" element={<SearchResultPage />} />
                    <Route path="/favorites" element={<FavProductsPage products={productsData} user={user}/>} />
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/checkout/:orderId" element={<CheckoutPage user={user} />} />
                    <Route path="/checkout" element={<CheckoutPage user={user} />} />
                    <Route path="/authorization" element={<AuthPage/>}/>
                    <Route path="/orders" element={<OrdersPage user={user}/>} />
                    <Route path="/edit-order/:orderId" element={<CheckoutPage />} />
                    <Route path="/profile" element={<ProfilePage user={user} handleLogout={logout} />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default function Root() {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    );
}
