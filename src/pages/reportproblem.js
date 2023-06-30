import React, {useState} from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input, Button,} from 'antd';
import "./styles/reportproblem.css"

const { TextArea } = Input;

const App = () => {
  const [value, setValue] = useState('');
  return <><div id="reportleft">
          <Input size="large" placeholder="Product Name" className="input inputsmall" prefix={<UserOutlined />} /><br/><br/>
          <TextArea value={value} className='input'
                onChange={(e) => setValue(e.target.value)}
                placeholder="Product Description"
                autoSize={{ minRows: 5, maxRows: 7 }}
            /> <br/><br/>
           <TextArea value={value} className='input'
                onChange={(e) => setValue(e.target.value)}
                placeholder="Suggested Solution(If Any)"
                autoSize={{ minRows: 5, maxRows: 7 }}
            /> <br/><br/>
           </div>
        <div id="reportright"><Button ghost>Submit Request</Button></div>
        </>
};
export default App;