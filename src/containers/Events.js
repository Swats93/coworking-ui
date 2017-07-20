import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isUndefined} from 'lodash';

import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router';
import {fetchEvents} from '~/modules/events';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    this.props.dispatch(fetchEvents());
  }
  render() {
    const firstEvent = this.props.events[0];
    const otherEvents = this.props.events.slice(1,this.props.events.length);
    console.log(otherEvents);
    if (this.props.events.length > 0) {
        return(
            <div>
            <div className='w-100 cover min-vh-100 bg-transparent ' >
                <div className='w-100 cf ph4 white bg-near-black'>
                    <Header/>
                </div>
                <div className = "mw8 center avenir">
                    <h2 className="baskerville f2 fw1 ph3 ph0-l">Events</h2>
                     <div className="bt bb b--black-10"></div>
                    <div className='w-100 mt3-ns mt2 center'>
                    <div className="cf w-100 pa2-ns">
                        <Link to={`/events/${firstEvent.id}/nac`}>
                            <div className="ba br3 pa2 pa2-ns b--black-10">
                                <div className="">
                                    <img src={firstEvent.images} className="db" style={{width:'1020', height:'400'}} />
                                </div>
                                <a href="" className="ph2 ph0-ns no-underline baskerville pb3 link black db">
                                    <h3 className="f5 f4-ns mb0 baskerville black-90 lh-title pl2">{firstEvent.name}</h3>
                                    <h3 className="f6 f5 fw4 mt2 baskerville black-60 pl2">{firstEvent.date_time}</h3>
                                    <h3 className="f6 f5 fw4 mt2 baskerville black-60 pl2">{firstEvent.venue}</h3>
                                    <a href="" className="no-underline near-white link black bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" >
                                        <div className="f6 ml3 pr2">Read More</div>
                                    </a>
                                </a>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='w-100 mt5 center'>
                    <div className="cf w-100 pa2-ns">
                        {this.props.events.map((event, i) => {
                            return(
                                <div key={i}>
                                <Link to={`/events/${event.id}/nac`}>
                                    <div className="fl w-50 w-25-m w-25-l pa2  ba br3 b--black-10 ">
                                        <div className="aspect-ratio aspect-ratio--1x1">
                                            <img src={event.images} className="db bg-center cover aspect-ratio--object" />
                                        </div>
                                        <a href="#0" className="ph2 baskerville ph0-ns pb3 link db">
                                            <h3 className="f5 mv0 pa2-ns mf4-ns baskerville lh-title mb0 black-90 pl2">{event.name}</h3>
                                            <h3 className="f6 f5 fw4 mt2 baskerville black-60 pl2">{event.date_time}</h3>
                                            <h3 className="f6 f5 fw4 mt2 baskerville black-60 pl2">{event.venue}</h3>
                                            <a href="" className="no-underline near-white link black bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" >
                                                <div className="f6 ml3 pr2">Read More</div>
                                            </a>
                                        </a>
                                    </div>
                                </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
            );
    }
    else {
        return(
    
    <div className="">
      <img className="spinner" src="assets/spinner.gif" alt="Loading ..."/>
    </div>
    );
}
  }
}

Events.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func,
  events: PropTypes.array
};

Events.defaultProps = {
  events: []
};

function mapStateTopProps(state) {
  return {
    events: state.events.collection
  };
}
export default connect(mapStateTopProps)(Events);