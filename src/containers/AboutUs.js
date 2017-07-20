import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import {slide as Menu} from 'react-burger-menu';

import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router';
// import Events from './Events';
import {apiBase} from 'config';

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='w-100 cover min-vh-100' style={{background: `white`}}>
          <div className='w-100 cf ph4 white bg-black'>
            <Header />
          </div>
          <div className='w-100 ph4 center'>
            <div className='w-100 cf'>
              <div className="mw8 center avenir">
                <h2 className="baskerville f2 fw1 ph3-ns ph0-l">Our Story</h2>
                <div className="bt bb b--black-10">
                  <div id="x-section-2"  className="mt3"  style={{backgroundColor: 'transparent'}}>
                      <div  className="" >
                        <iframe className="db" style={{minWidth: '100%',
    height: '400'}} src="https://www.youtube.com/embed/T7ZWV1LS0eQ" >
                        </iframe>
                      </div>
                  </div>
                  <div className="baskerville f3 f2-ns bt pt3-ns mb3-ns mt2-ns pt3 mb3 b--black-10">Who are we ?</div>
                  <div className="black dim  f5-l lh-copy" style={{textAlign:'justify'}}>Discovr is a vibrant coworking community created for startups, freelancers and business owners with a startup mindset. We are dedicated to making your work-life easy and fun while playing an integral role in helping your organization grow. Members of 91springboard get access to a coworking space with 24×7 office-infrastructure support, key service providers, knowledge sharing & collaboration, networking and of course, a free spirited culture that breeds innovation! 
                    <br></br>
                    We believe we act as a ‘springboard’ to enterprises propelling them further, helping them succeed. We’re also terribly proud of our country and the entrepreneurial spirit of the Indian and the ‘91’ in our name is our salute to that very spirit.</div>
                  <div className="db pv4 ph3 ph0-l no-underline black dim">
                    <div className="flex flex-column flex-row-ns">
                      <div className="dtc w2 w4-ns v-mid">
                        <img src="http://mrmrs.io/photos/p/2.jpg" className="ba b--black-10 db br-100 w2 w4-ns h2 h4-ns"/>
                      </div>
                      <div className="w-100 w-90-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title">Anand Kumar, Co-founder</h1>
                        <p className="f6 f5-l lh-copy" style={{textAlign:'justify'}}>
                          MS in Mechanical Engineering, Stanford University; 4+ years experience working at a medical device start-up (Caldera Medical) in Southern California, working on implantable devices for soft tissue repair.
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="bb b--black-10">
                    <div className="db pv4 ph3 ph0-l no-underline black dim" >
                    <div className="flex flex-column flex-row-ns">
                      <div className="dtc w2 w4-ns v-mid">
                        <img src="http://mrmrs.io/photos/p/3.jpg" className="ba b--black-10 db br-100 w2 w4-ns h2 h4-ns"/>
                      </div>
                      <div className="w-100 w-90-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title">Chilliya dose, CEO</h1>
                        <p className="f6 f5-l lh-copy" style={{textAlign:'justify'}}>
                          MS in Mechanical Engineering, Stanford University; 4+ years experience working at a medical device start-up (Caldera Medical) in Southern California, working on implantable devices for soft tissue repair.
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="bb b--black-10">
                    <div className="db pv4 ph3 ph0-l no-underline black dim" >
                    <div className="flex flex-column flex-row-ns">
                      <div className="dtc w2 w4-ns v-mid">
                        <img src="http://mrmrs.io/photos/p/4.jpg" className="ba b--black-10 db br-100 w2 w4-ns h2 h4-ns"/>
                      </div>
                      <div className="w-100 w-90-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title">Deepak Sharma, Company Secretary</h1>
                        <p className="f6 f5-l lh-copy" style={{textAlign:'justify'}}>
                          MS in Mechanical Engineering, Stanford University; 4+ years experience working at a medical device start-up (Caldera Medical) in Southern California, working on implantable devices for soft tissue repair.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bb b--black-10">
                    <div className="db pv4 ph3 ph0-l no-underline black dim" >
                    <div className="flex flex-column flex-row-ns">
                      <div className="dtc w2 w4-ns v-mid">
                        <img src="http://mrmrs.io/photos/p/6.jpg" className="ba b--black-10 db br-100 w2 w4-ns h2 h4-ns"/>
                      </div>
                      <div className="w-100 w-90-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title">Lalit Gupta, HoD</h1>
                        <p className="f6 f5-l lh-copy" style={{textAlign:'justify'}}>
                          MS in Mechanical Engineering, Stanford University; 4+ years experience working at a medical device start-up (Caldera Medical) in Southern California, working on implantable devices for soft tissue repair.
                        </p>
                      </div>
                    </div>
                  </div>
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

AboutUs.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateTopProps(state) {
  return {
  };
}

export default connect(mapStateTopProps)(AboutUs);
