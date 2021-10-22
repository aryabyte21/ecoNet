import { useState, useEffect } from "react";
import Sawo from "sawo";

import "./LoginPage.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const LoginPage = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});

  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: "8feeffc3-092e-41db-b9ff-6791fa581d9b",
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div className="containerStyle">
      <section>
        <div className="titleclass">
        <h1 className="title">Welcome to ecoNet</h1>
        <h2 className="title">Join us to change the world forever {/*isUserLoggedIn.toString()*/}</h2>
    </div>
        {!isUserLoggedIn ? (
          <div className="formContainer" id="sawo-container"></div>
        ) : (
          <div className="loggedin">
            <h2>User Successful Login</h2>
            <div>UserId: {payload.user_id}</div>
            <div>Verification Token: {payload.verification_token}</div>
          </div>
        )}
      </section>
    </div>
  );
};

export default LoginPage;
