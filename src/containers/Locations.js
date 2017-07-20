import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import {slide as Menu} from 'react-burger-menu';
import {isUndefined} from 'lodash';

import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router';
// import Events from './Events';
import {apiBase} from 'config';
import {fetchLocation} from '~/modules/locations';

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    this.props.dispatch(fetchLocation());
  }
  render() {
    console.log('propos', this.props)
    return (
        <div>
            <div
                className='w-100 cover min-vh-100'
                style={{
                    background: `white`
                }}
            >
                <div className='w-100 cf ph4 bg-black'>
                    <Header/>
                </div>
                <div className='w-100 ph4 center'>
                    <div className='w-100 cf'>
                        <div className="mw8 center avenir">
                            <div className="baskerville f2-ns pb3-ns pb3-m pb2 pt3-ns pt3-m pt2 f3 ph3 ph0-l">Locations</div>
                            <div className="bt bb b--black-10">
                                <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                    <div className="flex flex-column flex-row-ns">
                                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                            <img src="http://mrmrs.io/photos/cpu.jpg" className="db" alt="Photo of a dimly lit room with a computer interface terminal."/>
                                        </div>
                                        <div className="w-100 w-60-ns pl3-ns">
                                            <h1 className="f3 fw1 baskerville mt0 lh-title">Discovr Connaught Place</h1>
                                            <p className="f6 f5-l lh-copy">
                                            We are located in the heart of Delhi, surrounded by lush green gardens, fine dining restaurants, business hubs and high street shops. Our external environment and internal ambiance is a perfect balance of work and fun. Come and feel free to mingle with like-minded people, entrepreneurs & startups. You can also attend our events to network or unwind from a hard day's work
                                            </p>
                                           
                                            <a className="f6 link dim br1 ph3 pv2 mb2 dib white bg-navy mt4-ns" href="/events">LEARN MORE</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="bb b--black-10">
                                <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                    <div className="flex flex-column flex-row-ns">
                                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                            <img src="http://mrmrs.io/photos/warehouse.jpg" className="db" alt="Photo of a warehouse with stacked shelves."/>
                                        </div>
                                        <div className="w-100 w-60-ns pl3-ns">
                                            <h1 className="f3 fw1 baskerville mt0 lh-title">Warehouse Prices Are Fast on the Rise</h1>
                                            <p className="f6 f5-l lh-copy">
                                                A warehouse is a commercial building for storage of goods.
                                                Warehouses are used by manufacturers, importers, exporters,
                                                wholesalers, transport businesses, customs, etc. They are
                                                usually large plain buildings in industrial areas of cities,
                                                towns and villages.
                                            </p>
                                           
                                            <a className="f6 link dim br1 ph3 pv2 mb2 dib white bg-navy mt4-ns" href="/events">LEARN MORE</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="bb b--black-10">
                                <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                    <div className="flex flex-column flex-row-ns">
                                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                            <img src="http://mrmrs.io/photos/whale.jpg" className="db" alt="Photo of a whale's tale coming crashing out of the water."/>
                                        </div>
                                        <div className="w-100 w-60-ns pl3-ns">
                                            <h1 className="f3 fw1 baskerville mt0 lh-title">Giant Whale Invests Huge Money to Build a Computer Out of Plankton</h1>
                                            <p className="f6 f5-l lh-copy">
                                                Whale is the common name for a widely distributed and diverse
                                                group of fully aquatic placental marine mammals. They are an
                                                informal grouping within the infraorder Cetacea, usually
                                                excluding dolphins and porpoises.
                                            </p>
                                            <a className="f6 link dim br1 ph3 pv2 mb2 dib white bg-navy mt4-ns" href="/events">LEARN MORE</a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 cf mt4'>
                    </div>
                </div>
            </div>
                <Footer/>
        </div>
        );
    }
}

Locations.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func,
  locations: PropTypes.array
};

Locations.defaultProps = {
  locations: []
};
function mapStateTopProps(state) {
  return {
    locations: state.locations.collection
  };
}
export default <connect><mapStateTopProps></mapStateTopProps><Locations></Locations></connect>;