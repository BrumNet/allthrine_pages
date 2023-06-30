import React from 'react';
//import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {Empty} from 'antd';
import "./styles/myproduct.css"

const App = () => {

  const data = [5]
  return <div style={{minHeight:360}}>
            {data.length === 0 ? <Empty/> : 
            //<Table columns={columns} dataSource={data} scroll={{x: 900}} />
            <table>
              <thead>
                <tr>
                  <th></th><th>Product</th><th>Url</th><th className="big_table_item">Edit Url</th><th>Status</th><th className="big_table_item">Change Status</th><th className="big_table_item">View Page</th><th className="big_table_item">Request New Feature</th><th className='small_table_item'>Options</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Product</td><td>Url</td><td className="big_table_item">Edit Url</td><td>Status</td><td className="big_table_item">Change Status</td><td className="big_table_item">View Page</td><td className="big_table_item">Update My Page</td><td className='small_table_item'>Actions</td></tr>
              </tbody>
            </table>
            }
          </div>
};
export default App;