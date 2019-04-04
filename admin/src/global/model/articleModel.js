import request from '../request';
import api from './api';

export default {
  articleAdd(params) {
    return request.post(api.article, params);
  },
  articleAddShow(params) {
    return request.get(api.article, params);
  },
  articleEdit(id, params) {
    return request.put(api.articleId(id), params);
  },
  articleDelete(id) {
    return request.delete(api.articleId(id));
  },
  articleShowItem(id) {
    return request.get(api.articleId(id));
  },
};
