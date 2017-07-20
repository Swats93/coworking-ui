import api from '~/utils/api';

export default function reducer(state={}, action) {
  switch (action.type) {
     case 'newsFetchSucess':
      return {...state, collection: action.payload.news};
    case 'singleNewsFetchSucess':
      return {...state, singleNews: action.payload.singleNews};
  }
  return state;
}

export function fetchNews() {
  return (dispatch) => {
    api
      .get('/dashboard/news')
      .then((res) => {
        dispatch({
          type: 'newsFetchSucess',
          payload: {
            news: res.newsDetails
          }
        });
      })
      .catch((err) => {
        console.log({err});
      })
    ;
  };
}

export function fetchNewsById(id) {
  return (dispatch) => {
    api
      .get(`/dashboard/news/${id}`)
      .then((res) => {
        dispatch({
          type: 'singleNewsFetchSucess',
          payload: {
            singleNews: res.news
          }
        });
      })
      .catch((err) => {
        console.log({err});
      })
    ;
  };
}
