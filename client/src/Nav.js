import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    let styles = {
        color: 'deepPink',
    }
    return (
        <div className="nav" style={styles}>
            <ul>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </div>
    )
}
export default Nav;