import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AuditPage from './pages/AuditPage';
import LearnPage from './pages/LearnPage';
import AccountPage from './pages/AccountPage';
import SupportPage from './pages/SupportPage';
import Footer from './components/Footer';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen bg-white dark:bg-gray-900", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/audit", element: _jsx(AuditPage, {}) }), _jsx(Route, { path: "/learn", element: _jsx(LearnPage, {}) }), _jsx(Route, { path: "/account", element: _jsx(AccountPage, {}) }), _jsx(Route, { path: "/support", element: _jsx(SupportPage, {}) })] }), _jsx(Footer, {})] }) }));
}
export default App;
