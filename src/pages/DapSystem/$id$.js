import React, {Component} from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import SysBoard from './SysBoard';
import DevBoard from './DevBoard';



const { Header, Footer, Sider, Content } = Layout;
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



class DapSystem extends Component{


  componentDidMount() {
    //console.log("do did mount");
    const path = this.props.match.params.id;
    const id = path.split("&")[0];
    this.props.onDidMount(id);
  }


  render() {
    //是否重新调用请求
    const path = this.props.match.params.id;
    const select_id = path.split("&")[0];
    const info_id = this.props.info.id;
    if(select_id != info_id){
      this.componentDidMount();
    }
    const sysId = path.split("&")[0];
    const devId = path.split("&")[1];
    const ptId = path.split("&")[2];

    if(devId!=0 && ptId==0){
      return (
        <div style={{height:'100%'}}>
          <DevBoard/>
        </div>
      );
    }

    if(devId!=0 && ptId!=0){
      return (
        <dev>
          PointInfo
        </dev>
      );
    }


    return(
      <div style={{height:'100%'}}>
        <SysBoard/>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps,)(DapSystem);


/*<div>
        {
          this.props.info.deviceList.map(dev => {
            return(
              <div>
                {dev.name}
                {this.props.children}
              </div>
            )
          })
        }
      </div>*/
