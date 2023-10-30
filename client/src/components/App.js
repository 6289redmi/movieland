import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './views/Nav';
import Notice from './views/Notice/Notice';
import Recommend from './views/Movie/Recommend';
import Search from './views/Movie/Search';
import New from './views/Movie/New';
import Free from './views/FreeBoard/FreeBoard';
import Service from './views/Service/Service';
import Question from './views/Service/Question';
import Index from './views/Index/Index';
import Review from './views/Board/Review';
import Share from './views/Board/Share';
import RightSider from './views/RightSider/RightSider';
import BoardView from './views/BoardView/BoardView';
import Side from './views/Side';
import NotFound from './views/NotFound';
import Join from './users/Join/Join';
import Login from './users/Login/Login';

import { Layout } from 'antd';

const {  Sider, Content } = Layout;

const App = () => {
  
  return (
    <div className="App">
        <Router>
                    <Nav />
                    <hr />
                    <Layout>
                    <Sider 
                      theme="light">
                        <Side />
                      </Sider>
                    <Content
                     style={{
                        backgroundColor: '#FFF'
                    }}>
                <Routes>
                    < Route path="/" element={< Index />} />
                    < Route path="/notice" element={< Notice />} />
                    < Route path="/search" element={< Search />} />
                    < Route path="/reco" element={< Recommend />} />
                    < Route path="/share" element={< Share />} />
                    < Route path="/new" element={< New />} />
                    < Route path="/review" element={< Review />} />
                    < Route path="/free" element={< Free />} />
                    < Route path="/view/:Id" element={< BoardView />} />
                    < Route path="/service" element={< Service />} />
                    < Route path="/question" element={< Question />} />
                    < Route path="/login" element={< Login />} />
                    < Route path="/join" element={< Join />} />
                    < Route path="*" element={< NotFound />} />
                </Routes>
                </Content>
                <Sider theme="light">
                    <RightSider />
                </Sider>
                 </Layout>
            </Router>

              
    </div>
  );
};
export default App;