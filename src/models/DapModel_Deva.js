import  {GET_APP_INFO} from "../services/DapService";

export default {

  namespace: 'appmodel_deva',

  state: {
    appInfo: {
      id:"",
      appName:"",
      unitList:[{
        id:"",
        index:"",
        name:"",
        systemList:[{
          id:"",
          index:"",
          name:"",
          deviceList:[{
            id:"",
            index:"",
            name:"",
            item:[{
              pt_id:"",
            }],
          }],
          item:[{
            pt_id:"",
          }],
        }],
      }],
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *GET_APP_INFO(_, { call, put }){
      //请求数据接口
      const response = yield call(GET_APP_INFO);
      const appInfo = response.data;
      //console.log(response.data);
      //alert(response);
      //存储数据
      yield put({
        type: 'save',
        payload: { appInfo }
      });
    }
  },

  reducers: {
    save(state, action) {
      //console.log("do reducers");
      return { ...state, ...action.payload };
    },
  },

};
