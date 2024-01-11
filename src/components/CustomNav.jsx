import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

const MyNavbar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand>
                <img
                    src="/assets/logo.png"
                    width="100"
                    height="55"
                    className="d-inline-block align-top"
                    alt="Netflix Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link text-white">Home</Link>
                    <Link to='/tvshows' className="nav-link text-white">TV Shows</Link>
                    <Link to="/movies" className="nav-link text-white">Movies</Link>
                    <Link to="/" className="nav-link text-white">Recently Added</Link>
                    <Link to="/" className="nav-link text-white">My List</Link>
                </Nav>
                <Link to="/" className="nav-link text-white">KIDS</Link>
                <FontAwesomeIcon icon={faBell} className="icons text-white" />
                <FontAwesomeIcon icon={faUser} className="icons text-white" />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;