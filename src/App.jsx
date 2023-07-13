import React from 'react';
import { Route, BrowserRouter,Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import CreatePost from './pages/create';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path='/createpost' element={<CreatePost/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
