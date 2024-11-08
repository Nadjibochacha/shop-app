import React from 'react';
import './App.css';
import Header from './components/header'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/home';
import ErrorComponent from './pages/error';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path='*' element={<ErrorComponent/>} />
      </Route>
    </>
  )
)

function RootLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
}
function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
