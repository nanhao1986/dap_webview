import request from '../utils/request';

/**
 * 读取app模型
 * @constructor
 */
export function GET_APP_INFO(){
  return request('/api/deva/get_model');
}

export function GET_SYSTEM_INFO(id){
  return request('/api/deva/get_sysinfo/'+id);
}
