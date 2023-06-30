import React, {useState} from 'react';
//import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, theme, Button } from 'antd';
import "./App.css"
import MyProducts from './pages/myproducts'
import AddNewProduct from './pages/addnewproducts'
import ReportProblem from './pages/reportproblem'
import ChatManager from './pages/chatmanager'
import Settings from './pages/settings'

const {Header, Content, Sider} = Layout;


const App = () => {
  const {token: {colorBgContainer}} = theme.useToken();
  const labels = ["My Products","Add New Product","Report A Problem","Chat with Manager"]
  

  const [page, setpage] = useState(0);

  return <Layout>
      <Sider id="sidebar" theme='light' breakpoint="lg" width={250} collapsedWidth="0" onBreakpoint={broken => {console.log(broken);}} onCollapse={(collapsed, type) => {console.log(collapsed, type);}}>
        <div className="demo-logo-vertical" />
        <div className='heading'>
          <h4>My Dashboard</h4>
          <p>jokoto@gmail.com</p>
        </div>
        <div>
        {labels.map((x,index) => <Button id={"but"+index} className={index !== page ? "menu_buttons":"menu_buttons active_buttons"} block='true' onClick={()=>{setpage(index)}}>{x}</Button>)}
        <div><Button id="but4"  className={page !== 4 ? "menu_buttons":"menu_buttons active_buttons"} block="true"  onClick={()=>{setpage(4)}}>Settings</Button></div>
        </div>
        
        <div id="brand" className="heading">
          <h4><i>Allthrine Pages</i></h4>
          <div><i>www.pages.allthrine.com</i></div>
        </div>
      </Sider>
      <Layout>
        <Header style={{padding: 0, minHeight: 150, background: colorBgContainer}}>
          <div id='headingTitle'>
            <h4>{labels[page]??"Settings"}</h4>
          </div>
          {page === 0 ? <Button id='headingButton' onClick={()=>{setpage(1)}} ghost>Add New Product</Button>: <></>}
        </Header>
        <Content id="content" style={{background:colorBgContainer}}>
         {
         page === 0 ? <MyProducts/> : 
         page === 1 ? <AddNewProduct/> : 
         page === 2 ? <ReportProblem/> :
         page === 3 ? <ChatManager/> : 
         <Settings/>
         }
        </Content>
      </Layout>
    </Layout>;
};
export default App;


        /*<Footer id="footer" style={{textAlign: 'right',background:colorBgContainer}}>
          Switch to Mobile Icon
        </Footer>*/