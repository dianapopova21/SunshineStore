import React, { createContext, useState, useEffect } from "react";
import bcrypt from "bcryptjs";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (savedUser) setUser(savedUser);
        setLoading(false);
    }, []);

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = users.find((user) => user.email === email);

        if (!foundUser) {
            return { success: false, message: "User not found!" };
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
            return { success: false, message: "Incorrect password!" };
        }

        const { password: _, ...userWithoutPassword } = foundUser;

        localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword));
        setUser(userWithoutPassword);
        return { success: true, message: "Login successful!" };
    };

    const register = (formData) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some((user) => user.email === formData.email)) {
            return { success: false, message: "Email is already registered." };
        }

        const hashedPassword = bcrypt.hashSync(formData.password, 10);
        const newUser = { ...formData, id: Date.now().toString(), password: hashedPassword };

        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
