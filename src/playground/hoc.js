// HOC (Higher Order Component): A component(HOC) that render another component(Regular Component). 
//Puropse of HOC: 
    // i. Reuse code 
    // ii. Render hijacking
    // iii. Prop manipulation 
    // iv. Abstruct state  

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Please do not share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
                ) : (
                    <p>Please login to view info.</p>
                )}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This are the details." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This are the details." />, document.getElementById('app'));