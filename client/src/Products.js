import React from 'react';

function Products(props){
    let styles = {
        textAlign: 'center',
        fontSize: '30px'
    }
    return (
        <div className="products" style={styles}>
            <h2>Available Rigs</h2>
        </div>
    )
}

export default Products;