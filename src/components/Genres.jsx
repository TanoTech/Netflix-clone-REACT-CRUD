import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faTh } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Genres = () => {
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <h2 className="mb-4 text-white">TV Shows</h2>
                <div className="dropdown ml-4 mt-1">
                    <DropdownButton title="Genres" variant="secondary" size="sm" className="rounded-0" id="dropdownMenuButton" style={{ backgroundColor: "#221f1f" }}>
                        <Dropdown.Item>Comedy</Dropdown.Item>
                        <Dropdown.Item>Drama</Dropdown.Item>
                        <Dropdown.Item>Thriller</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faThLarge} className="icons text-white" />
                <FontAwesomeIcon icon={faTh} className="icons text-white" />
            </div>
        </div>
    )
}

export default Genres;