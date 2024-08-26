import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, Container, Nav, Form, FormControl, Button, } from "react-bootstrap";
const NavbarComponent = () => (_jsx(Navbar, { bg: "light", expand: "lg", children: _jsxs(Container, { children: [_jsx(Navbar.Brand, { href: "#home", children: "Navbar" }), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsxs(Navbar.Collapse, { id: "basic-navbar-nav", children: [_jsxs(Nav, { className: "me-auto", children: [_jsx(Nav.Link, { href: "#home", children: "Home" }), _jsx(Nav.Link, { href: "#link", children: "Link" }), _jsx(Nav.Link, { href: "#", disabled: true, children: "Disabled" })] }), _jsxs(Form, { className: "d-flex", children: [_jsx(FormControl, { type: "search", placeholder: "Search", className: "me-2", "aria-label": "Search" }), _jsx(Button, { variant: "outline-success", children: "Search" })] })] })] }) }));
export default NavbarComponent;
