import React, { Component } from 'react';
import { Layout } from 'antd';
import DapSider from './../components/DapSider';
import DapHeader from './../components/DapHeader';

const { Footer, Content } = Layout;

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <DapSider/>
        <div style={{
          position: 'fixed', bottom: '5%' +
            '', color: 'white',
        }}>
          bottoms
        </div>
        <Layout>
          <DapHeader/>
          <Content style={{ margin: '0px 0px 0px',background:'#000717' }}>

            <div style={{ padding: 24, minHeight: 360, height: '100%' }}>
              {this.props.children}
            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Data Analysis Platform Created by U-Control</Footer>
        </Layout>
      </Layout>
    );
  }
}
