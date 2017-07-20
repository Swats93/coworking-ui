import api from '~/utils/api';

export default function reducer(state={}, action) {
  switch (action.type) {
    case 'eventsFetchSucess':
      return {...state, collection: action.payload.events, fetchingCollection: false};
    case 'eventFetchSucess':
      return {...state, collection: action.payload.event};
  }
  return state;
}

export function fetchEvents() {
  return (dispatch) => {
    api
      .get('/dashboard/events')
      .then((res) => {
        dispatch({
          type: 'eventsFetchSucess',
          payload: {
            events: res.eventDetails
          }
        });
      })
      .catch((err) => {
        console.log({err});
      })
    ;
  };
}

export function fetchEventById(id) {
  return (dispatch) => {
    api
      .get(`/dashboard/events/${id}`)
      .then((res) => {
        console.log({res})
        dispatch({
          type: 'eventFetchSucess',
          payload: {
            event: res.event
          }
        });
      })
      .catch((err) => {
        console.log({err});
      })
    ;
  };
}
