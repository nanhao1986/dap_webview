import React, { Component } from 'react';
import { Layout } from 'antd/lib/index';
import { connect } from 'dva/index';
import { Typography, Icon, Menu } from 'antd';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const height = document.documentElement.clientHeight*0.75;
const namespace = 'sysmodel_deva';

const mapStateToProps = (state) => {
  const info = state[namespace].sysInfo;
  //console.log(info);
  return {
    info,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: (id) => {
      dispatch({
        type: `${namespace}/GET_SYSTEM_INFO`,
        payload: {id: id},
      });
    },
  };
};



class _layout extends Component {

  componentDidMount() {
    const pathname = this.props.location.pathname.split("/");
    const id = pathname[2].split("&")[0];
    //const id = this.props.match.params.id;
    this.props.onDidMount(id);
  }

  render() {
    //是否重新调用请求
    const pathname = this.props.location.pathname.split("/");
    const select_id = pathname[2].split("&")[0];
    //const select_id = this.props.match.params.id;
    const info_id = this.props.info.id;
    if(select_id != info_id){
      this.componentDidMount();
    }

    return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0}}>
          <div style={{float:"left"}}>
            <Title level={2} style={{fontFamily:"微软雅黑"}}>
              <Icon type="sync" spin />
              &nbsp;
              &nbsp;
              {this.props.info.name}
              &nbsp;
              &nbsp;
              |
              &nbsp;
            </Title>
          </div>
          <div style={{float:"left" }}>
            <Menu

              mode="horizontal"
            >
              <Menu.Item key="mail">
                <Icon type="mail" />磨煤机
              </Menu.Item>
              <Menu.Item key="app" disabled>
                <Icon type="appstore" />给煤机
              </Menu.Item>
              <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />密封风机</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">润滑油泵</a>
              </Menu.Item>
            </Menu>
          </div>


        </Header>
        <Layout style={{height:'100%'}}>
          <Sider style={{background: '#fff', padding: 0, height:height}}>
            ss
          </Sider>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(_layout)


