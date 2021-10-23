import { useState, useEffect } from "react";
import Sawo from "sawo";
import { db, auth } from "../../firebase";
import {firebase} from "../../firebase";
import "./LoginPage.css";
import { Route, Redirect } from 'react-router'
import { createBrowserHistory as history} from 'history';
import {Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;
var click=false;
const LoginPage = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
   const [openSignIn, setOpenSignIn] = useState(false);
  const [user, setUser] = useState(null);
  
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
            const signUp =(event)=>  firebase.auth().createUserWithEmailAndPassword(payload.identifier, payload.verification_token)
   .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
      const goto=(event)=>{
        var click=true;
      }
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
         
            {/* <h2>User Successful Login</h2>
            <div>UserId: {payload.user_id}</div>
            <div>Verification Token: {payload.verification_token}</div> */}
            <h3>Are you ready!!</h3>
            <Link to="/user">   <button style={{alignItems:"center",justifyContent:"center"}}
              style={{ padding: "7px", margin: "15px", border:"4px solid #2ecc71", borderRadius:"24px", color:"whitesmoke" }}
              type="submit"
              onClick={signUp, goto}
              
            >
              Yes
            </button>
         </Link>
          </div>
      
        )
          
  }
      </section>

    </div>
  );
  
};

export default LoginPage;
