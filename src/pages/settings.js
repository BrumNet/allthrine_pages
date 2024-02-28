import React from 'react';
import {Button,} from 'antd';
import { Link } from 'react-router-dom';
import "./styles/settings.css"
 

const App = () => { 
  return <><div id="settingsleft">
          <center><Link to="/changepassword"><Button className="but">Change Password</Button></Link></center>
             <br/><br/>
          <center><Link to="/"><Button className="but">Log Out</Button></Link></center>
           </div>
        </>
};
export default App;