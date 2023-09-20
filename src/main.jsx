import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Head from './components/Head.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Blog from './components/Blog.jsx';
import Users from './components/Users.jsx';
import UserDetails from './components/UserDetails.jsx';
import Posts from './components/Posts.jsx';
import PostDetails from './components/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/head',
        element: <Head></Head>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
      },
      {
        path: 'users/user/:userid',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postid',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        element: <PostDetails></PostDetails>
      }
    ]
  },
  
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
