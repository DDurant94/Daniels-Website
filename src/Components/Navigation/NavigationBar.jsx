import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavDropdownMenu from './Navigation-Components/NavigationDropdown';
import './../Styles/Navigation-Styles/NavigationBarStyles.css';

function NavigationBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const Dropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const DropdownIcon = () => {
        return dropdownOpen ? <i className="bi bi-three-dots-vertical"></i> : <i className="bi bi-three-dots"></i>;
    };

    const MenuDisplay = () => {
        return dropdownOpen ? "d-inline-flex align-items-start" : "";
    };

    return (
        <Navbar expand="md" id="nav-bar" className=''>
            <Navbar.Brand id="nav-brand" data-text="Daniel Durant" className='mb-2'>
                Daniel Durant
            </Navbar.Brand>
            <Navbar.Toggle
                aria-controls="nav-dropdown"
                id="nav-toggle"
                className="mx-1"
                onClick={Dropdown}
            >
                {DropdownIcon()}
            </Navbar.Toggle>
            <Navbar.Collapse id="nav-collapse" className={MenuDisplay()}>
                <Nav.Link
                    href="mailto:dannyjdurant@gmail.com?subject=Hello Daniel, I'd like to hire you!"
                    id="hire-me-link"
                    className="position-absolute end-0 px-1 mb-2">
                    <i className="bi bi-chat"></i> Hire Me
                </Nav.Link>
                <NavDropdownMenu />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;