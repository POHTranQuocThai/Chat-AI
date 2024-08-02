import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/app.js';
import './index.css'
import ChatDetail from './pages/ChatDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index:true,
        element: <Navigate to='/chat/info'></Navigate>
      },
      {
        path:"/chat/info",
        element: <ChatDetail></ChatDetail>
      },
      {
        path:"/chat/:id",
        element: <ChatDetail></ChatDetail>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
