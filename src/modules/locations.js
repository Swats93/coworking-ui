import api from '~/utils/api';

export default function reducer(state={}, action) {
  switch (action.type) {
    case 'locationFetchSucess':
      return {...state, collection: action.payload.locations, fetchingCollection: false};
    case 'locFetchSucess':
      return {...state, collection: action.payload.loc};
  }
  return state;
}

export function fetchLocation() {
  return (dispatch) => {
    api
      .get('/dashboard/locations')
      .then((res) => {
        dispatch({
          type: 'locationFetchSucess',
          payload: {
            locations: res.locationDetails
          }
        });
      })
      .catch((err) => {
      })
    ;
  };
}

export function fetchLocationById(id) {
  return (dispatch) => {
    api
      .get(`/dashboard/locations/${id}`)
      .then((res) => {
        console.log({res})
        dispatch({
          type: 'locFetchSucess',
          payload: {
            loc: res.location
          }
        });
      })
      .catch((err) => {
        console.log({err});
      })
    ;
  };
}


