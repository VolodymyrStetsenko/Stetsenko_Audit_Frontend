import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (_jsx("nav", { className: "bg-white dark:bg-gray-800 shadow-lg", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between h-16", children: [_jsx("div", { className: "flex", children: _jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [_jsx(Logo, { className: "mr-1" }), _jsx("span", { className: "text-xl font-bold text-primary-600 dark:text-primary-400 select-none", children: "Stetsenko Audit" })] }) }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Link, { to: "/audit", className: "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400", children: "AI Audit" }), _jsx(Link, { to: "/learn", className: "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400", children: "Learn" }), _jsx(Link, { to: "/account", className: "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400", children: "My Account" }), _jsx(Link, { to: "/support", className: "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400", children: "Support" }), _jsx("button", { onClick: toggleDarkMode, className: "p-2 rounded-lg bg-gray-200 dark:bg-gray-700", children: isDarkMode ? (_jsx(SunIcon, { className: "h-5 w-5 text-yellow-500" })) : (_jsx(MoonIcon, { className: "h-5 w-5 text-gray-700" })) })] })] }) }) }));
};
export default Navbar;
