import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Head from './components/Head.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello from react router</div>,
  },
  {
    path: 'about',
    element: <div>I am in about section</div>,
  },
  {
    path: '/contact',
    element: <div>Call me</div>,
  },
  {
    path: '/head',
    element: <Head></Head>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
