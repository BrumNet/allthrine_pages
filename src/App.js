import React, {useEffect} from 'react';
//import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './pages/login'
import Main from './Main'
import ChangePassword from './pages/changepassword'
import loggedIn from "./checklog.js"


const App = () => {
/*  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      alert(e);
    }
  }
*/
  const router = createBrowserRouter([
    {
      path: "/",
      element: loggedIn.state?<Main/>:<Login/>, //(<Redirect to="/login" />)//
      errorElement: <center>Page Not Found</center>
    },
    {
      path: "/changepassword",
      element: <ChangePassword/>,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

}

export default App;
