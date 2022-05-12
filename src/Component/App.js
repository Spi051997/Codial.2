import * as React from 'react'
import '../App.css';
import {Link,Route,Routes} from 'react-router-dom'
import  Nav from './Nav'
// import Home from './Home';
// import Post from './Post';
import {Home,Post} from './';

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome  to Route Test</h1> */}
<Nav />
      <Routes>
       <Route    path='/' element={<Home/>}   />
       <Route  path='/Post' element={<Post />}  />

      </Routes>
     
    </div>
  );
}

export default App;
