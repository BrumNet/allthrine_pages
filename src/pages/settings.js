import React from 'react';
import {Button,} from 'antd';
import "./styles/settings.css"
 

const App = () => { 
  return <><div id="settingsleft">
          <center><Button className="but">Change Password</Button></center>
             <br/><br/>
          <center><Button className="but">Log Out</Button></center>
           </div>
        </>
};
export default App;