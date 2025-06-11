import { jsx as _jsx } from "react/jsx-runtime";
import logo from '../assets/stetsenko-logo.png';
const Logo = ({ className = '' }) => (_jsx("img", { src: logo, alt: "Stetsenko Audit Logo", className: `h-12 w-auto ${className}` }));
export default Logo;
