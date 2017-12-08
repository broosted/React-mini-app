//higher order component HOC
// A component that renders another compoenet
// reuse code
// render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        <div>
            { props.isAdmin &&   <p>This is private info. Please dont share</p>}
           <WrappedComponent {...props}/>


        </div>
    }
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        <div>
            {props.isAuthenticated === true ? 
            <WrappedComponent {...props}/> 
            : <p>Sorry you are not authenticated to view the content</p>}

        </div>

    }

}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details"/>, document.getElementById('app'))