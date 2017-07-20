import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isUndefined} from 'lodash';

import {slide as Menu} from 'react-burger-menu';
import Header from './Header';
import Footer from './Footer';
import {fetchEventById} from '~/modules/events';

class Nac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // event: {}
    };
  }

  componentWillMount() {
    if (Object.keys(this.props.event).length === 0) {
      this.props.dispatch(fetchEventById(this.props.routeParams.id));
    }
  }

  render() {
    const {event} = this.props;
    return (
      <div>
        <div className='w-100 cover min-vh-100 bg-transparent ' >
          <div className='w-100 cf ph4 white bg-navy'>
          <Header />
          </div>
          <div className='w-100 ph4 tc mt5 bg-white'>
            <img className='bg-center h5' src={event.images} />
            <p className='f2'>{event.name}</p>
            <p className='f5'>{event.content}
              {event.date_time} <br/>
              {event.event_organizer_name} <br/>
            </p>
          </div>
        </div>
      <Footer/>
    </div>
    );
  }
}

Nac.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func,
  event: PropTypes.object
};

Nac.defaultProps = {
  event: {}
};

function mapStateTopProps(state, componentProps) {
  return {
    event: (state.events.collection ? state.events.collection : []).find(e => e.id === componentProps.routeParams.id) || state.events.event
  };
}
export default connect(mapStateTopProps)(Nac);
