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

export function GET_TIME_SERIES_DATA(id, start, end) {
  return request('/api/deva/get_pointvalue/'+id+'?start='+start+'&end='+end);
}
