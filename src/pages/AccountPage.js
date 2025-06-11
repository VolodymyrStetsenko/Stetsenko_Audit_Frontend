import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon, ArrowRightOnRectangleIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
const AccountPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    // Mock audit history
    const auditHistory = [
        {
            id: '1',
            contractName: 'TokenContract.sol',
            date: '2024-03-15',
            status: 'Completed',
            vulnerabilities: 3
        },
        {
            id: '2',
            contractName: 'StakingContract.sol',
            date: '2024-03-10',
            status: 'Completed',
            vulnerabilities: 1
        }
    ];
    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setIsLoggedIn(true);
    };
    const handleSignUp = (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setIsLoggedIn(true);
    };
    if (!isLoggedIn) {
        return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 flex flex-col items-center", children: _jsx("div", { className: "w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, className: "backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/40 rounded-3xl shadow-xl p-8 flex flex-col items-center", children: [_jsx(UserCircleIcon, { className: "h-14 w-14 text-blue-500 mb-4" }), _jsx("h2", { className: "text-2xl font-bold text-center mb-8", children: isSignUp ? 'Sign Up' : 'Sign In' }), _jsxs("form", { onSubmit: isSignUp ? handleSignUp : handleLogin, className: "space-y-6 w-full", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email" }), _jsx("input", { type: "email", id: "email", className: "input-field", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Password" }), _jsx("input", { type: "password", id: "password", className: "input-field", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), isSignUp && (_jsxs("div", { children: [_jsx("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Confirm Password" }), _jsx("input", { type: "password", id: "confirmPassword", className: "input-field", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true })] })), error && _jsx("div", { className: "text-red-500 text-sm text-center", children: error }), _jsx("button", { type: "submit", className: "btn-primary w-full", children: isSignUp ? 'Sign Up' : 'Sign In' })] }), _jsx("div", { className: "mt-6 text-center", children: _jsx("button", { className: "text-primary hover:underline text-sm", onClick: () => { setIsSignUp(!isSignUp); setError(''); }, children: isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up" }) })] }) }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 flex flex-col items-center", children: _jsx("div", { className: "w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsxs("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2", children: [_jsx(UserCircleIcon, { className: "h-8 w-8 text-blue-500" }), " My Account"] }), _jsxs("button", { onClick: () => setIsLoggedIn(false), className: "btn-secondary flex items-center gap-2", children: [_jsx(ArrowRightOnRectangleIcon, { className: "h-5 w-5" }), " Sign Out"] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsx("div", { className: "md:col-span-2", children: _jsxs("div", { className: "backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/40 rounded-2xl shadow-xl p-6", children: [_jsxs("h2", { className: "text-xl font-semibold mb-4 flex items-center gap-2", children: [_jsx(ClipboardDocumentListIcon, { className: "h-6 w-6 text-indigo-500" }), "Audit History"] }), _jsx("div", { className: "space-y-4", children: auditHistory.map((audit) => (_jsx("div", { className: "border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white/80 dark:bg-gray-900/60", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-medium", children: audit.contractName }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: audit.date })] }), _jsxs("div", { className: "text-right", children: [_jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", children: audit.status }), _jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: [audit.vulnerabilities, " vulnerabilities found"] })] })] }) }, audit.id))) })] }) }), _jsx("div", { children: _jsxs("div", { className: "backdrop-blur-lg bg-white/60 dark:bg-gray-800/60 border border-white/30 dark:border-gray-700/40 rounded-2xl shadow-xl p-6", children: [_jsxs("h2", { className: "text-xl font-semibold mb-4 flex items-center gap-2", children: [_jsx(UserCircleIcon, { className: "h-6 w-6 text-blue-500" }), "Account Details"] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-500 dark:text-gray-400", children: "Email" }), _jsx("p", { className: "mt-1 text-gray-900 dark:text-white", children: email })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-500 dark:text-gray-400", children: "Subscription Plan" }), _jsx("p", { className: "mt-1 text-gray-900 dark:text-white", children: "Free Trial" })] })] })] }) })] })] }) }) }));
};
export default AccountPage;
