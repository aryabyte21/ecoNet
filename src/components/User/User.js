
import React, { useState, useEffect } from "react";
import "./User.css";
import Post from "./Post";
import ImageUpload from "./ImageUpload";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { db, auth } from "./firebase";
import {firebase} from "./firebase";
// import InstagramEmbed from "react-instagram-embed";
import { Button, colors, Input } from "@material-ui/core";
import {Icon} from "@material-ui/core";
// import {GoogleMaps, withScriptjs, withGoogleMap} from "react-google-maps"
// function Map(){
//   return <GoogleMaps defaultZoom={10} defaultCenter={{lat:45,lng:-75}}/>
// }
function getModalStyle() {
  const top = 0;
  const left = 0;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
// const WrappedMap = withScriptjs(withGoogleMap(Map));
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "450px",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [openSignIn, setOpenSignIn] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, username]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);
  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    setOpen(false);
  };
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setOpenSignIn(false);
  };

     const signInGoogle=(event)=>{
       event.preventDefault();
              var google_provider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(google_provider)
              .then((re)=>{
                 console.log(re);

              })
              .catch((err)=>{
                console.log(err);
              })
            };
   
  return (
    <div className="app,card">
      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3></h3>
      )}

      <div className="app__header">
        <h2>ecoNet</h2>

        

        {user ? (
          <Button onClick={() => auth.signOut() } >Logout</Button>
        ) : (
          <div className="app_loginContainer">
            <Button onClick={() => setOpenSignIn(true)}>SignIn</Button>
            <Button onClick={() => setOpen(true)}>SignUp</Button>
          </div>
        )}
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ borderRadius: "20px" }} className="munni">
          <form className="app__signup, card">
            <center>
             <h2 style={{color:"white"}}>ecoNet</h2>
            </center>
            <input
              style={{
                padding: "5px",
                margin: "5px",
                border: "4px solid #3498db",
                background:"#191919",
                color:"whitesmoke",
                textAlign:"center",
                // marginBottom:"10px",
                borderRadius: "24px",
              }}
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              style={{
                padding: "5px",
                margin: "5px",
                border: "4px solid #3498db",
                background:"#191919",
                color:"whitesmoke",
                textAlign:"center",
                
                borderRadius: "24px",
              }}
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              style={{
                padding: "5px",
                margin: "5px",
                border: "4px solid #3498db",
                background:"#191919",
                color:"whitesmoke",
                textAlign:"center",
                // marginBottom:"10px"
                borderRadius: "24px",
              }}
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
              style={{ padding: "7px", margin: "15px", border:"4px solid #2ecc71", borderRadius:"24px", color:"whitesmoke" }}
              type="submit"
              onClick={signUp}
            >
              SignUp
            </Button>
          </form>
        </div>
      </Modal>

      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={{ borderRadius: "20px" }} className="munni">
          <form
            className="app__signup, card"
            style={{ margin: "5px", padding: "5px" }}
          >
           <center>
             <h2 style={{color:"white"}}>ecoNet</h2>
            </center>
         
            <input
              style={{
                padding: "5px",
                margin: "8px",
                background:"#191919",
                textAlign:"center",
                border: "4px solid #3498db",
                borderRadius: "24px",
                color:"whitesmoke",
              }}
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              style={{
                padding: "5px",
                margin: "5px",
                background:"#191919",
                textAlign:"center",
                border: "4px solid #3498db",
                cursor: "pointer",
                borderRadius: "24px",
                color:"whitesmoke",
              }}
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
         
               <Button className="happy"
              style={{ padding: "7px", margin: "20px",color:"#2ecc71",border:"4px solid #2ecc71", borderRadius:"24px", }}
              
              type="submit"
              onClick={signInGoogle}
            >
              Sign Up with Google 
            </Button>
           <Button className="happy"
              style={{ padding: "7px", margin: "20px",color:"#2ecc71",border:"4px solid #2ecc71", borderRadius:"24px", }}
              
              type="submit"
              onClick={signIn}
            >
              LOG IN
            </Button>
          </form>
        </div>
      </Modal>
<loca />
      <div className="app__posts">
        {" "}
        {posts.map(({ id, post }) => (
          <Post
            key={id}
            postId={id}
            user={user}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
        
      </div>
      {/* <InstagramEmbed
        url="https://instagr.am/p/Zw9o4/"
        clientAccessToken="123|456"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      /> */}
    </div>
  );
}

export default App;
