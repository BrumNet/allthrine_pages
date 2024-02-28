import React from 'react';
import {Button, Input} from 'antd';
import { Link } from "react-router-dom";
import loggedIn from '../checklog';

import "./styles/login.css"
 

const App = () => { 
  return <div id="login_page">
            <div id="login_content">
            <p>create account</p>
            <p id="login_title">Business Login</p>
            <Input size="large" placeholder="username" className="input"  />
            <br/><br/><br/><br/>
            <Input size="large" placeholder="password" className="input" />
            <Link to="/"><Button onClick={()=>{loggedIn.state = true}}>Submit</Button></Link>
            </div>
         </div>
};
export default App;