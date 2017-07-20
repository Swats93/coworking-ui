import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import {slide as Menu} from 'react-burger-menu';

import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router';
// import Events from './Events';
import {apiBase} from 'config';

class Plans extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <div
                className='w-100 cover min-vh-100'
                style={{
                background: `white`
                }}
            >
            <div className='w-100 cf ph4 white bg-black'>
                <Header />
            </div>
            <div className='w-100 ph4 center'>
                <div className='w-100 mt3 f2-ns f3 baskerville fl pa2-l mt3-l'>Plans & Pricing</div>
                <div className='w-100 cf mt2 '>
                    <div className="fl w-100 mt0-l" style={{display: 'flex', justifyContent: 'space-around', paddingTop: '3em', flexWrap: 'wrap'}}>
                        <div className="fl w-100  pa0-l ba br1 b--black-10 w-50-m w-25-l pa0-m " style=
                            {{marginBottom: '8em', maxWidth: '280px', fontSize: '0.875rem', fontWeight: 'lighter', lineHeight: '1.8'}}>
                            <div className="aspect-ratio aspect-ratio--3x4">
                                <span style={{backgroundImage: "url(https://innov8.work/static/images/home/hero-bg.jpg)"}} className="cover bg-center aspect-ratio--object">
                                  <div className="white pl3 mt6  pl4-l f2 mt6-l">HOT <br></br> DESK</div>
                                  <p className="white pl3 pl4-l">Starts from Rs 5000/month</p>
                                  <div className="pl3-l pl3">
                                    <a href="" className="ml5 mt3 ml5-l mt0-l no-underline near-white link black bg-animate bg-red hover-bg-gray inline-flex items-center tc br2 pa2" >
                                      <div className="f6 ml3 pr2">Read More</div>
                                    </a>
                                  </div>
                                </span>
                            </div>
                            <div className="bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                            <p className="f6 lh-copy measure">
                                Perfect typography depends on perfect harmony between all of its elements. 
                                Harmony is determined by relationships
                                or proportions. 
                                Proportions are hidden everywhere. words themselves. 
                            </p>
                            </div>
                            <div className="bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                            <p className="f6 lh-copy measure">
                                Perfect typography depends on perfect harmony between all of its elements. 
                                Harmony is determined by relationships
                                or proportions. 
                                Proportions are hidden everywhere. words themselves. 
                            </p>
                            </div>
                            <div className="bb h4-m pa2 b--black-10 h4-l " style={{minHeight: '150px'}}>
                            <p className="f6 lh-copy measure">
                                Perfect typography depends on perfect harmony between all of its elements. 
                                Harmony is determined by relationships
                                or proportions. 
                                Proportions are hidden everywhere. words themselves. 
                            </p>
                            </div>
                            <div className="bb h4-m pa2 b--black-10 h4-l " style={{minHeight: '200px'}}>
                            <p className="f6 lh-copy measure">
                                Perfect typography depends on perfect harmony between all of its elements. 
                                Harmony is determined by relationships
                                or proportions. 
                              
                            </p>
                            </div>
                            <div className="h3-l h3-m pa2 ">
                              <a href="" className="ml5 ml5-ns no-underline black link black bg-animate bg-transparent ba b--red inline-flex items-center  tc br1 pa2" >
                                <div className="f6 ml3 pr2">READ MORE</div>
                              </a>
                            </div>
                        </div>
                        <div className="fl w-100  pa0-l ba br1 b--black-10 w-50-m w-25-l pa0-m " style=
                            {{marginBottom: '8em', maxWidth: '280px', fontSize: '0.875rem', fontWeight: 'lighter', lineHeight: '1.8'}}>
                            <div className="aspect-ratio aspect-ratio--3x4">
                                <span style={{backgroundImage: "url(https://innov8.work/static/images/home/hero-bg.jpg)"}} className="cover bg-center aspect-ratio--object">
                                  <div className="white pl3 mt6 pl4-ns f2 mt6-ns">DEDICATED DESK</div>
                                  <p className="white pl3 pl4-ns">Starts from Rs 5000/month</p>
                                  <div className="pl3-ns pl3">
                                    <a href="" className="ml5  mt3 ml5-ns mt0-ns no-underline near-white link black bg-animate bg-red hover-bg-gray inline-flex items-center tc br2 pa2" >
                                      <div className="f6 ml3 pr2">Read More</div>
                                    </a>
                                  </div>
                                </span>
                            </div>
                            <div className="bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                                <p className="f6 lh-copy measure">
                                    True book design, therefore, is a matter of tact (tempo, rhythm,
                                    touch) alone.
                                </p>
                            </div>
                            <div className="bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                                <p className="f6 lh-copy measure">
                                    It flows from something rarely appreciated today:
                                    good taste. 
                                </p>
                            </div>
                            <div className=" bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                                <p className="f6 lh-copy measure">
                                    The book designer strives for perfection; yet every
                                    perfect thing lives somewhere in the neighborhood of dullness and
                                    is frequently mistaken for it by the insensitive. 
                                </p>
                            </div>
                            <div className="bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '200px'}}>
                                <p className="f6 lh-copy measure">
                                    In a time that
                                    hungers for tangible novelties, dull perfection holds no
                                    advertising value at all. 
                                </p>
                            </div>
                            <div className="h3-l h3-m pa2" >
                              <a href="" className="ml5 ml5-ns no-underline black link black bg-animate bg-transparent ba b--red inline-flex items-center  tc br1 pa2" >
                                <div className="f6 ml3 pr2">READ MORE</div>
                              </a>
                            </div>
                        </div>
                        <div className="fl w-100  pa0-l ba br1 b--black-10 w-50-m w-25-l pa0-m " style=
                            {{marginBottom: '8em', maxWidth: '280px', fontSize: '0.875rem', fontWeight: 'lighter', lineHeight: '1.8'}}>
                            <div className="aspect-ratio aspect-ratio--3x4">
                                <span style={{backgroundImage: "url(https://innov8.work/static/images/home/hero-bg.jpg)"}} className="cover bg-center aspect-ratio--object">
                                <div className="white pl3 mt6 pl4-ns f2 mt6-ns">PRIVATE OFFICES</div>
                                  <p className="white pl3 pl4-ns">Starts from Rs 5000/month</p>
                                  <div className="pl3-ns pl3">
                                    <a href="" className="ml5  mt3 ml5-ns mt0-ns no-underline near-white link black bg-animate bg-red hover-bg-gray inline-flex items-center tc br2 pa2" >
                                      <div className="f6 ml3 pr2">Read More</div>
                                    </a>
                                  </div>
                                </span>
                            </div>
                            <div className=" bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                                <p className="f6 lh-copy measure">
                                    The book designer strives for perfection; yet every
                                    perfect thing lives somewhere in the neighborhood of dullness and
                                    is frequently mistaken for it by the insensitive. 
                                </p>
                            </div>
                            <div className=" bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                                <p className="f6 lh-copy measure">
                                    Only through constant practice and strictest self-criticism may we
                                    develop a sense for a perfect piece of work. 
                                </p>
                            </div>
                            <div className=" bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                                <p className="f6 lh-copy measure">
                                    Unfortunately, most
                                seem content with a middling performance. 
                                </p>
                            </div>
                            <div className=" bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '200px'}}>
                                <p className="f6 lh-copy measure">
                                    Careful spacing of words
                                and the correct spacing of capital letters appear to be unknown or
                                unimportant to some typesetters, yet for him who investigates.
                                </p>
                            </div>
                            <div className="h3-l h3-m pa2 ">
                              <a href="" className="ml5 ml5-ns no-underline black link black bg-animate bg-transparent ba b--red inline-flex items-center  tc br1 pa2" >
                                <div className="f6 ml3 pr2">READ MORE</div>
                              </a>
                            </div>
                        </div>
                        <div className="fl w-100  pa0-l ba br1 b--black-10 w-50-m w-25-l pa0-m " style=
                            {{marginBottom: '8em', maxWidth: '280px', fontSize: '0.875rem', fontWeight: 'lighter', lineHeight: '1.8'}}>
                            <div className="aspect-ratio aspect-ratio--3x4">
                                <span style={{backgroundImage: "url(https://innov8.work/static/images/home/hero-bg.jpg)"}} className="cover bg-center aspect-ratio--object">
                                <div className="white pl3 mt6 pl4-ns f2 mt6-ns">MEETING ROOMS</div>
                                  <p className="white pl3 pl4-ns">Starts from Rs 5000/month</p>
                                  <div className="pl3-ns pl3">
                                    <a href="" className="ml5  mt3 ml5-ns mt0-ns no-underline near-white link black bg-animate bg-red hover-bg-gray inline-flex items-center tc br2 pa2" >
                                      <div className="f6 ml3 pr2">Read More</div>
                                    </a>
                                  </div>
                                </span>
                            </div>
                            <div className=" bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                                <p className="f6 lh-copy measure">
                                    In a masterpiece of typography, the artist's signature has been
                                    eliminated. 
                                </p>
                            </div>
                            <div className=" bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                                <p className="f6 lh-copy measure">
                                    What some may praise as personal styles are in reality
                                    small and empty peculiarities, frequently damaging, that masquerade
                                    as innovations 
                                </p>
                            </div>
                            <div className=" bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '150px'}}>
                                <p className="f6 lh-copy measure">
                                    Unfortunately, most
                                    seem content with a middling performance. 
                                </p>
                            </div>
                            <div className="bb h4-m pa2 b--black-10 h4-l" style={{minHeight: '200px'}}>
                                <p className="f6 lh-copy measure">
                                    Unfortunately, most
                                    seem content with a middling performance.   
                                </p>
                            </div>
                            <div className="h3-l h3-m pa2 ">
                              <a href="" className="ml5 ml5-ns no-underline black link black bg-animate bg-transparent ba b--red inline-flex items-center  tc br1 pa2" >
                                <div className="f6 ml3 pr2">READ MORE</div>
                              </a>
                            </div>
                        </div>
                    </div>
                 {/*<div className="fl w-100">
                        <div className="fl w-100 w-50-m w-25-l pa3-m pa4-l">
                            <p className="f6 lh-copy measure">
                                Perfect typography depends on perfect harmony between all of its elements. 
                                Harmony is determined by relationships
                                or proportions. Proportions are hidden everywhere. words themselves. 
                            </p>
                        </div>
                        <div className="fl w-100 w-50-m w-25-l pa3-m pa4-l">
                            <p className="f6 lh-copy measure">
                                True book design, therefore, is a matter of tact (tempo, rhythm,
                                touch) alone. It flows from something rarely appreciated today:
                                good taste. The book designer strives for perfection; yet every
                                perfect thing lives somewhere in the neighborhood of dullness and
                                is frequently mistaken for it by the insensitive. In a time that
                                hungers for tangible novelties, dull perfection holds no
                                advertising value at all. 
                            </p>
                        </div>
                        <div className="fl w-100 w-50-m w-25-l pa3-m pa4-l">
                            <p className="f6 lh-copy measure">
                                In a masterpiece of typography, the artist's signature has been
                                eliminated. What some may praise as personal styles are in reality
                                small and empty peculiarities, frequently damaging, that masquerade
                                as innovations. 
                            </p>
                        </div>
                        <div className="fl w-100 w-50-m w-25-l pa3-m pa4-l">
                            <p className="f6 lh-copy measure">
                                Only through constant practice and strictest self-criticism may we
                                develop a sense for a perfect piece of work. Unfortunately, most
                                seem content with a middling performance. Careful spacing of words
                                and the correct spacing of capital letters appear to be unknown or
                                unimportant to some typesetters, yet for him who investigates, the
                                correct rules are not difficult to discover.
                            </p>
                        </div>
                    </div>*/}
                </div>
                <div className='w-100 cf mt4'></div>
            </div>
        </div>
            <Footer/>
        </div>
    );
  }
}

Plans.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateTopProps(state) {
  return {
  };
}

export default connect(mapStateTopProps)(Plans);
