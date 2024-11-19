import React from 'react';
import './NavItem.css';

const NavItem = ({ id, title, subtitle, onClick }) => {
    return (
        <div className="nav-item" onClick={onClick}>
            <img src={`${process.env.PUBLIC_URL}/assets/${id}.png`} alt={title} className="nav-icon" />
            <div>
                <p className="nav-title">{title}</p>
                <p className="nav-subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default NavItem;
