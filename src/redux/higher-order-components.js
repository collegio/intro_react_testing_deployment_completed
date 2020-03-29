import React from 'react';
import ReactDOM from 'react-dom';

const NameInfo = (props) => (
    <div>
        <h1>Hey There!</h1>
        <p>Your name is: {props.yourName}</p>
    </div>
);

const withShareWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>Sharing your name on the internet may lead to undesirable results!</p>
            <WrappedComponent {...props} />
        </div>
    );
}

const AdminNameInfo = withShareWarning(NameInfo);

ReactDOM.render(<AdminNameInfo yourName="Rob" />,  document.getElementById('app'));