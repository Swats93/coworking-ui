import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isUndefined} from 'lodash';

import {slide as Menu} from 'react-burger-menu';
import Header from './Header';
import Footer from './Footer';
import {fetchLocationById} from '~/modules/locations';

class LocDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    if (Object.keys(this.props.loc).length === 0) {
      this.props.dispatch(fetchLocationById(this.props.routeParams.id));
    }
  }

  render() {
    const {loc} = this.props;
    return (
      <div>
        <div className='w-100 cover min-vh-100 bg-transparent ' >
          <div className='w-100 cf ph4 white bg-navy'>
          <Header />
          </div>
          <div className='w-100 ph4 tc mt5 bg-white'>
            <img className='bg-center h5' src={loc.images} />
            <p className='f2'>{loc.name}</p>
            <p className='f5'>{loc.description}
              {loc.address} <br/>
            </p>
          </div>
        </div>
      <Footer/>
    </div>
    );
  }
}

LocDetails.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func,
  loc: PropTypes.object
};

LocDetails.defaultProps = {
  loc: {}
};

function mapStateTopProps(state, componentProps) {
  return {
    loc: (state.locations.collection ? state.locations.collection : []).find(e => e.id === componentProps.routeParams.id) || state.locations.loc
  };
}
export default connect(mapStateTopProps)(LocDetails);
