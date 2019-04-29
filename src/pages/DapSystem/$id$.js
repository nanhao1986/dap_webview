import React, {Component} from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import SysBoard from './SysBoard';
import DevBoard from './DevBoard';
import AnalogBoard from './AnalogBoard';
import DigitaLBoard from './DigitalBoard';



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
    /**
     * 是否重新调用请求
     */

    const path = this.props.match.params.id;
    const select_id = parseInt(path.split("&")[0]);
    const info_id = parseInt(this.props.info.id);
    if(select_id !== info_id){
      this.componentDidMount();
    }
    //const sysId = parseInt(path.split("&")[0]);
    const devId = parseInt(path.split("&")[1]);
    const ptId = parseInt(path.split("&")[2]);
    const ptType = parseInt(path.split("&")[3]);

    /**
     * 加载设备信息页面
     */
    if(devId!==0 && ptId===0){
      return (
        <div style={{height:'100%'}}>
          {
            this.props.info.deviceList.map(dev=>{
              const id = parseInt(dev.id);
              if(id===devId){
                return(
                  <DevBoard info={dev}/>
                );
              }
            })
          }
        </div>
      );
    }

    /**
     * 加载测点信息页面
     */
    if(ptId!==0){
      if(ptType===1){
        return (
          <AnalogBoard id={ptId}/>
        );
      }else{
        return (
          <DigitaLBoard id={ptId}/>
        );
      }

    }


    /**
     * 加载系统信息页面
     */
    return(
      <div style={{height:'100%'}}>
        <SysBoard info={this.props.info}/>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DapSystem);

