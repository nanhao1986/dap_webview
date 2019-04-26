import React from 'react';

import {Layout, Button, Icon } from 'antd';
import { Link} from "react-router-dom";

const {Header} = Layout;

const DapHeader = () => {
  return (
    <Header style={{theme: "dark", padding: 0, height:'6%' }}>
      <span style={{color: '#fff', paddingLeft: '2%', fontSize: '1.8em', width: '10%'}}>
        Information Management System
      </span>
      <div style={{float: "right", paddingRight: '2%', paddingTop:'0.5%'}}>
        <Link to={'/Dashboard'} >
          <Icon type="home" style={{fontSize:'2.6em'}} />
        </Link>



      </div>
    </Header>
  );
};

DapHeader.propTypes = {
};

export default DapHeader;
