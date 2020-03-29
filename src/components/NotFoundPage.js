import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
    return (
        <div>
            <h1>Oops!</h1>
            <p>Looks like you didn't take that left turn in Albequerque!</p>
            <p><Link to="/">Homepage</Link></p>
        </div>
    );
}

export default NotFoundPage;