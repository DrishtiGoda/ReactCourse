import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", ()=> {
        window.gapi.client.init({
            clientId:'505892926173-9mptba43ob13ttn5vmpkengmhvup2fm0.apps.googleusercontent.com',
            scope:'email'
        });
    });
  }

  render() {
    return <div> Google Auth</div>;
  }
}

export default GoogleAuth;
 