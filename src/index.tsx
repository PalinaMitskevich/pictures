import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import App from './App';
import { Home } from './pages/Home';
import { Picture } from './pages/Picture';

const router = createBrowserRouter([
    {
        path: "/pictures",
        element: <Home />,
    },
    {
        path: 'picture/:pictureId',
        element: <Picture />,
    }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
