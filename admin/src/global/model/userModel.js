import request from '../request';
import api from './api';

export default {
  // userAdd: function (params) {
  //   return request.post(api.user, params);
  // },
  register(params) {
    return request.post(api.login, params);
  },
  userAdd(params) {
    return request.post(api.user, params);
  },
  userShow() {
    return request.get(api.user);
  },
  userUpdate(id, params) {
    return request.put(api.userId(id), params);
  },
  userDelete(id, params) {
    return request.delete(api.userId(id), params);
  },
};
