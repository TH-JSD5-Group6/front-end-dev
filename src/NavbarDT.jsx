import React from 'react';
const Navbar = () => {
    return (
        <div className="navbar">
            <a href={'/'}>Infinity Fit</a>
            <a href={'/activity'}>Activity</a>
            <a href={'/setting'}>Setting</a>
            <a href={'/profile'}>Profile</a>
        </div>
    )
}

export default Navbar;