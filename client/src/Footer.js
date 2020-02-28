import React from 'react';

function Footer(){
    let styles={
        bbackgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        textAlign: 'center',
    }
    return <footer style={styles}>Happy Trails, forever.</footer>
}

export default Footer;