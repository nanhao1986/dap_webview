import React, {Component} from 'react';
import {Layout, Tabs, Menu} from 'antd';
import { connect } from 'dva';
import { Link} from "react-router-dom";
import styles from "./DapSider.css";
const {Sider} = Layout;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;

/*
document.body.clientWidth ==> BODY对象宽度
document.body.clientHeight ==> BODY对象高度
document.documentElement.clientWidth ==> 可见区域宽度
document.documentElement.clientHeight ==> 可见区域高度
*/


const height = document.documentElement.clientHeight;
const namespace = 'appmodel_deva';

const mapStateToProps = (state) => {
  const info = state[namespace].appInfo;
  //console.log(info);
  return {
    info,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/GET_APP_INFO`,
      });
    },
  };
};


class DapSider extends Component{

  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    return(
      <Sider width={"15%"} style={{theme: "dark", padding: 0, height:height}}>
        <div className={styles.logo}>
        </div>
        <Tabs defaultActiveKey="1" tabPosition={"top"} style={{color:"white"}}>
          <TabPane tab="系统" key="1" style={{fontSize:20}}>
            <Menu mode={"inline"} theme={"dark"} defaultOpenKeys={"1"} defaultSelectedKeys={"0"}>
              {/*<Menu.Item key={"0"}>
                  <Link to={'/dashboard'}>
                    首页
                  </Link>
              </Menu.Item>*/}
              {
                //console.log(this.props.info)
                this.props.info.unitList.map(unit => {
                  return(
                    <SubMenu key={unit.index} title={<span><span>{unit.name}</span></span>}>
                      {

                        unit.systemList.map(sys => {
                          const id = sys.id + "&0&0";
                          return(
                            <Menu.Item key={sys.index} >
                              <Link to={{pathname:`/DapSystem/${id}`}}>{sys.name}</Link>
                            </Menu.Item>
                          )
                        })
                      }
                    </SubMenu>
                  );
                })
              }
            </Menu>
          </TabPane>
          <TabPane tab="设备" key="2">
            <Menu mode={"inline"} theme={"dark"} defaultOpenKeys={"1"} defaultSelectedKeys={"0"}>
              {/*<Menu.Item key={"0"} >
                <Link to={'/Dashboard'}>
                  首页
                </Link>
              </Menu.Item>*/}
              {
                //console.log(this.props.info)
                this.props.info.unitList.map(unit => {
                  return(
                    <SubMenu key={unit.index} title={<span><span>{unit.name}</span></span>}>
                      {
                        unit.systemList.map(sys => {
                          return(sys.deviceList.map(dev => {
                            return(
                              <Menu.Item key={sys.name+dev.index}>
                                <Link to={'/DapDevice'}>{dev.name}</Link>

                              </Menu.Item>
                            )
                          }));
                        })
                      }
                    </SubMenu>

                  );
                })
              }
            </Menu>
          </TabPane>
          <TabPane tab="关键测点" key="3">
            <Menu></Menu>
          </TabPane>
        </Tabs>
        <div style={{bottom:'0px'}}>
          bottom
        </div>
      </Sider>

    );
  }
}



//export default DapSider;
export default connect(mapStateToProps, mapDispatchToProps)(DapSider);
