import {useEffect} from "react";
import "../App.css";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import {getPost} from '../api/index'

import { Home, Post } from "./";

function App() {
  useEffect(()=>
  {
    const fetchPosts=async()=>
    {
      const response=await getPost();
      console.log(response)
    }
      fetchPosts();

  },[]);
  return (
    <div className="App">
      <Nav />

      {/* <Routes>
       <Route    path='/' element={<Home/>}   />
       <Route  path='/Post' element={<Post />}  />

      </Routes> */}
    </div>
  );
}

export default App;
