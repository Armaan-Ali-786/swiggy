import logo from './logo.svg';
import './App.css';
import Home from './MainPage/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContext from './Global/MainContext';
import Search from './MainPage/Search';
import Help from './MainPage/Help';
import Sign from './MainPage/Sign';
import SwigyCorporate from './MainPage/SwigyCorporate';

let router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about-us',
    element:<SwigyCorporate/>
  },
  {
    path:'/about',
    element:<Search/>
  },
  {
    path:'/help',
    element:<Help/>
  }
])

function App() {
  return (
    <>
    <MainContext>
      <RouterProvider router={router}></RouterProvider>
    </MainContext>
    </>
  );
}

export default App;
