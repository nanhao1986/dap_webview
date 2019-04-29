import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'dva/index';
import { Icon, Menu } from 'antd';
import './_layout.css';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;

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
        payload: { id: id },
      });
    },
  };
};


class _layout extends Component {

  componentDidMount() {
    const pathname = this.props.location.pathname.split('/');
    const id = pathname[2].split('&')[0];
    //const id = this.props.match.params.id;
    this.props.onDidMount(id);
  }

  render() {
    //是否重新调用请求
    const pathname = this.props.location.pathname.split('/');
    const select_id = parseInt(pathname[2].split('&')[0]);
    //const select_id = this.props.match.params.id;
    const info_id = parseInt(this.props.info.id);
    const sysPathId = info_id + '&0&0&0';

    if (select_id !== info_id) {
      //this.componentDidMount();
      console.log('DidMount');
    }

    return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          {/*当前选择的系统*/}
          <div style={{ float: 'left' }}>
            <Menu mode={'horizontal'} style={{ display: 'inline-block' }}>
              <SubMenu
                key={info_id}
                title={
                  <span>
                    <Icon type="setting"/>
                    <Link to={{ pathname: `/DapSystem/${sysPathId}` }}>
                      {this.props.info.name}
                    </Link>
                  </span>
                }
                style={{ fontSize: '2.2em' }}
              >

                {this.props.info.itemList.map(
                  (item) => {
                    const ptPathId = info_id + "&0&" + item.pt_id + "&" + item.pt_type;
                    return (
                      <Menu.Item key={item.pt_id}>
                        <Link to={{pathname:`/DapSystem/${ptPathId}`}}>
                          {item.pt_name}
                        </Link>
                      </Menu.Item>
                    );
                  },
                )}
              </SubMenu>
              {/* 属于当前系统的设备*/}
              {
                this.props.info.deviceList.map(dev => {
                  const sysId = this.props.info.id;
                  const devId = dev.id;
                  const devPathId = sysId + '&' + devId + '&0&0';
                  return (
                    <SubMenu
                      key={dev.id}
                      title={
                        <span>
                          <Link to={{ pathname: `/DapSystem/${devPathId}` }}>
                            {dev.name}
                          </Link>
                        </span>
                      }
                      style={{ fontSize: '1.8em' }}
                    >
                      {dev.itemList.map(item => {
                        const ptPathId = sysId + "&" + devId + "&" + item.pt_id + "&" + item.pt_type
                        return (
                          <Menu.Item key={item.pt_id}>
                            <Link to={{pathname:`/DapSystem/${ptPathId}`}}>
                              {item.pt_name}
                            </Link>
                          </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  );
                })
              }


            </Menu>
          </div>

        </Header>
        <Layout style={{ height: '100%' }}>
          {/*<Sider style={{background: '#fff', padding: 0, height:height}}>
            ss
          </Sider>*/}
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(_layout);


