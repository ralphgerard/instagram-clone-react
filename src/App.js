import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  //useEffect Runs a piece of code based on a specific condition

  useEffect(() => {
    //this is where code runs, everytime page runs or "posts change"

    db.collection("posts").onSnapshot(snapshot => {
      //every time a new post is added, this code fires
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
          alt=""
        />
      </div>

      <h1>Let's make an Instagram Clone</h1>
      {/* Headers */}

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      {/* Posts */}
    </div>
  );
}

export default App;
