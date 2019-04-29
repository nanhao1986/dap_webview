import { GET_SYSTEM_INFO } from '../services/DapService';

export default {

  namespace: 'sysmodel_deva',

  state:{
    sysInfo:{
      id:"",
      index:"",
      name:"",
      deviceList:[{
        id:"",
        index:"",
        name:"",
        itemList:[{
          pt_id:"",
          pt_name:"",
          pt_type:"",
        }],
      }],
      itemList:[{
        pt_id:"",
        pt_name:"",
        pt_type:"",
      }],
    },
  },

  /*subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },*/

  effects: {
    *GET_SYSTEM_INFO({ payload }, { call, put }){
      //请求数据接口
      const response = yield call(GET_SYSTEM_INFO, payload.id);
      const sysInfo = response.data;
      //console.log(response.data);
      //alert(response);
      //存储数据
      yield put({
        type: 'save',
        payload: { sysInfo }
      });
    }
  },

  reducers: {
    save(state, action) {
      //console.log("do reducers");
      return { ...state, ...action.payload };
    },
  },

}
