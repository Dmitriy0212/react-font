import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Posts from "./component/posts/Posts";
import Post from "./component/post/Post";
import Addpost from "./component/crieit/Addpost";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/addpost" element={<Addpost />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
