import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import {slide as Menu} from 'react-burger-menu';
import Modal from 'react-modal';
import Header from './Header';
import Footer from './Footer';
import Take_Tour from './Take_Tour';
import {Link} from 'react-router';
// import Events from './Events';
import {apiBase} from 'config';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }
  showModal(e) {
    return this.setState({isModalVisible: e});
  }
  render() {
    const customStyles = {
      overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)'
    },
    content : {
      position                   : 'fixed',
      top                        : '10%',
      width                      : '64%',
      left                       : '18%',
      right                      : '40px',
      bottom                     : '40px',
      border                     : '1px solid #ccc',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px'
      }
    };
    return (
      <div>
      <div
        className='w-100 cover min-vh-100'
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, 
            rgba(0, 0, 0, 0.4) 100%), 
            url(https://www.emarsys.com/wp-content/uploads/2015/09/partner-hero-bg.jpg)`
        }}
      >
      <div className='w-100 ph4 center'>
            <Header />
          <div className='w-100 cf'>
            <div className='w-100 w-70-ns fl-ns white mt5'>
              <div className='f2 baskerville ml3-ns'> Discovr is a lifestyle collaborative brand, <br/>
              where you work with the <br/> leaders of tomorrow.
              </div>
              <div className='w-100 w-60-ns baskerville ml3-ns f4 mt3'>
               Be a step ahead from the crowd.
              </div>
              <div className='w-100  w-30-ns ml3-ns fl-ns pt4  mt0'>
                <button className="f6-ns white baskerville pr4 pt2 pb2 ph4-ns b--orange  bg-transparent" onClick={() => this.showModal(true)}>TAKE TOUR</button>
                <Modal
                  isOpen={this.state.isModalVisible}
                  style={customStyles}
                  >
                <div className="tr" onClick={() => this.showModal(false)} >X</div>
                <Take_Tour/>
              </Modal>
              </div>
            </div>    
          </div>
            <div className='w-100 cf mt5 ml3-ns'>
              <Link to='/locations'>
              <div className='w-100 w-20-ns w-40-m mr5-ns h6 fl-ns tc ba b--gray white mb5 pa4'>
                <div className='tc baskerville pb3' >Locations</div>
                <div className= 'tc baskerville f6'>Present in Delhi and will come soon to Bangalore, Chandigarh and Mumbai.</div>
                <button className="f6-ns white baskerville  mt4 pt2 pb2 b--orange  bg-transparent " style={{marginTop: '63px'}}>LEARN MORE</button>
              </div>
              </Link>
              <Link to='/plans'>
              <div className='w-100 w-20-ns w-40-m mr5-ns h6  tc fl-ns ba b--gray white mb5 pa4'>
                <div className='baskerville pb3' >Plans</div>
                <div className='baskerville f6 '>Shared workspace for freelancers, startups, enterprenurs and even divisions of corporate teams</div>
                <button className="f6-ns baskerville white mt4 pt2 pb2 b--orange  bg-transparent " style={{marginTop: '48px'}}>LEARN MORE</button>
              </div>
              </Link>
              <Link to='/news'>
              <div className='w-100 w-20-ns w-40-m h6 mr5-ns tc fl-ns ba b--gray white mb5 pa4'>
                <div className='tc baskerville pb3' >News</div>
                <div className=' tc baskerville f6'>Get latest updates of startups getting funded and all the activities and success stories of startups.</div>
                <button className="f6-ns baskerville white mt4 pt2 pb2 b--orange  bg-transparent " style={{marginTop: '48px'}}>LEARN MORE</button>
              </div>
              </Link>
              <Link to='/events'>
                <div className='w-100 w-20-ns w-40-m h6  tc fl-ns ba b--gray white mb5 pa4'>
                  <div className='tc baskerville pb3' >Events</div>
                  <div className='tc baskerville f6 '>Get latest updates of startup ecosystem, inside stories and through our events and workshops.</div>
                  <button className="f6-ns baskerville white mt4 pt2 pb2 b--orange  bg-transparent " style={{marginTop: '48px'}}>LEARN MORE</button>
                </div>
              </Link>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
    );
  }
}

Landing.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateTopProps(state) {
  return {
  };
}

export default connect(mapStateTopProps)(Landing);
