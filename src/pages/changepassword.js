import React from 'react';
import {Button, Input} from 'antd';
import { Link } from 'react-router-dom';
import "./styles/changepassword.css"
 

const App = () => { 
  return <div id="changepassword_page">
            <div id="changepassword_content">
            <Link to="/"><p>exit</p></Link>
            <p id="changepassword_title">Change Password</p>
            <Input size="large" placeholder="username" className="input"  />
            <br/><br/><br/><br/>
            <Input size="large" placeholder="password" className="input" />
            <br/><br/><br/><br/>
            <Input size="large" placeholder="confirm password" className="input" />
            <Button>Submit</Button>
            </div>
         </div>
};
export default App;