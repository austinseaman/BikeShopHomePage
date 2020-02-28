import React from 'react';
import Products from './Products.js';
import Images from './Images.js'

function Main(){
    let styles = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '75%',
        margin: 'auto',
        textAlign: 'center'
    }
    return (
        <div className="info" style={styles}>
            <Products />
            <Images />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna purus, bibendum vitae varius ut, bibendum ac quam. Donec sem est, placerat vitae est at, feugiat auctor metus. Cras consequat, felis vitae aliquet scelerisque, dolor arcu vehicula nisl, eu efficitur sem mi sit amet felis. Cras dignissim augue nec sapien mollis cursus. Etiam sed tellus urna. Nunc sit amet arcu quis erat mattis pulvinar eu nec quam. Suspendisse ac ante et lectus semper aliquam. Vestibulum vulputate diam in mauris tincidunt imperdiet. Vivamus fermentum lectus ex, at elementum nunc gravida vehicula. Nullam in velit laoreet tortor gravida bibendum. Maecenas consequat mi eros, in tincidunt nunc consectetur eget. Sed dictum fringilla magna, eu tempor velit suscipit in. Fusce laoreet elementum feugiat. Praesent lobortis tincidunt maximus. Fusce interdum eros in rutrum rhoncus.
            Nulla commodo tortor quis mauris scelerisque elementum. Praesent sed ligula orci. Morbi feugiat mauris id ultricies fermentum. Integer felis ligula, sodales at placerat et, facilisis ut turpis. Mauris euismod elementum neque, in scelerisque eros sagittis quis. Vivamus ut felis leo. Ut imperdiet ex id iaculis consectetur. Donec fringilla scelerisque condimentum. Maecenas imperdiet tellus id nulla molestie scelerisque. Maecenas est mauris, ullamcorper non laoreet et, pretium sed magna. Duis sodales pellentesque porttitor. Cras nisl erat, ultrices et egestas in, lacinia a lectus.</p>
        </div>
    )
}

export default Main;