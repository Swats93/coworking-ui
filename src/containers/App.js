import React, {Component, PropTypes} from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';

import news from '~/modules/news';
import events from '~/modules/events';
import locations from '~/modules/locations';

const rootReducer = combineReducers({
  news,
  events,
  locations
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class App extends Component {
  render() {
    return <div className='App'>
      <Provider store={store}>
        <div style={{height: '100%'}}>
          {this.props.children}
        </div>
      </Provider>
    </div>;
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
