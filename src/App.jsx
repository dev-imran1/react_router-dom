import { useState } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/allpages/Home';
import About from './pages/allpages/About';
import Service from './pages/allpages/Service';
import RoutLayOut from './RoutLayOut';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RoutLayOut />}>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
      </Route>

    ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
