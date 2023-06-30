import React from 'react';
import { Input, Button, Card} from 'antd';
import "./styles/chatmanager.css"
 

const App = () => {
  return <><div id="chatleft">
            <div id="chat">
                <div className="messageme">
                <Card className="card" title="My message">
                        <p>Hello PM, I have being looking for more products to replicate on the market but I need a sense of direction. Kindly help.</p>
                    </Card>
                </div>
                <div className="messagefrom">
                    <Card className="card" title="Pages Manager" /*extra={<a href="#">More</a>}*/>
                        <p>Well noted. I will reach out first thing tomorrow morning.</p>
                    </Card>
                </div>
                <div className="messageme">
                <Card className="card" title="My message">
                        <p>Hello PM, I have being looking for more products to replicate on the market but I need a sense of direction. Kindly help.</p>
                    </Card>
                </div>
                <div className="messagefrom">
                    <Card className="card" title="Pages Manager" /*extra={<a href="#">More</a>}*/>
                        <p>Well noted. I will reach out first thing tomorrow morning.</p>
                    </Card>
                </div>
            </div>
            <div id="message_tools"><Button>Send</Button><Input className='input inputsmall'/></div>
          </div>
        </>
};
export default App;