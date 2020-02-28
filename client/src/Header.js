import React from 'react'
import './App.css'

function Header() {
    let styles = {
        textAlign: 'center',
        color: 'brown',
        fontSize: '35px'
    }
    return (
        <div className="header" style={styles}>
            <h1>MICYCLE'S BICHAEL SHOP</h1>
        </div>
    )
}

export default Header;