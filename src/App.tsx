import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import About from './components/About/About';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: '/',
          Component: Main,
        },
        {
          path: 'about',
          Component: About,
        },
        {
          path: 'login',
          Component: Login,
        },
        {
          path: 'signup',
          Component: Signup,
        },
      ],
    },
  ],
  {
    basename: '/marico-landing',
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
