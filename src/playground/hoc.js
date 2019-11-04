//Higher order component (HOC) - a component (HOC) that renders another component

// Advantages of using HOC's are ....
  // * Re-use code
  // * Render Hijacking
  // * prop manipulation
  // * Abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);


const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAdmin && <p>This is private information: Please dont tell anyone yet!</p>
      }
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Restricted Content - please login to gain access</p>}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="Vuong Pham is actually 29 years old!"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Vuong Pham is actually not 26 years old!"/>, document.getElementById('app'));
