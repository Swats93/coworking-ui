import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isUndefined} from 'lodash';

import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router';
import {fetchNews} from '~/modules/news';

class News extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.dispatch(fetchNews());
  }

  render() {
    const firstNews = this.props.news[0];
    const otherNews = this.props.news.slice(1,this.props.news.length);
    console.log(otherNews);
    if (this.props.news.length > 0) {
    return (
        <div>
            <div className='w-100 cover min-vh-100 bg-transparent ' >
                <div className='w-100 cf ph4 white bg-black'>
                    <Header/>
                </div>
                <div className = "mw8 center avenir">
                <h2 className="baskerville f2 fw1 ph3 ph0-l">News</h2>
                     <div className="bt bb b--black-10"></div>
                <div className='w-100 mt3-ns mt2 center'>
                    <div className="cf w-100 pa2-ns">
                        <Link to={`/news/${firstNews.id}/newsLoader`}>
                            <div className="ba br3 pa2 b--black-10">
                                <div className="">
                                    <img src={firstNews.images} className="db" style={{width:'1020', height:'400'}} />
                                </div>
                                <a href="#0" className="ph2 ph0-ns pb3 link db">
                                    <h3 className="f5 f4-ns mb0 baskerville black-90 pl2">{firstNews.heading}</h3>
                                    <h3 className="f6 f5 fw4 mt2 baskerville black-90 pl2">{firstNews.date_time}</h3>
                                    <h3 className="f6 f5 fw4 mt2 baskerville black-90 pl2">{firstNews.author}</h3>
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
                        {this.props.news.map((newz) => {
                            return(
                                <Link to={`/news/${newz.id}/newsLoader`}>
                                    <div className="fl w-50 w-25-m w-25-l pa2 ba br3 pa2 b--black-10">
                                        <div className="aspect-ratio aspect-ratio--1x1">
                                            <img src={newz.images} className="db bg-center cover aspect-ratio--object" />
                                        </div>
                                        <a href="#0" className="ph2 ph0-ns pb3 link db">
                                            <h3 className="f5 f4-ns baskerville mb0 black-90 pl2">{newz.heading}</h3>
                                            <h3 className="f6 f5 fw4 baskerville mt2 black-60 pl2">{newz.date_time}</h3>
                                            <h3 className="f6 f5 fw4 baskerville mt2 black-60 pl2">{newz.author}</h3>
                                            <a href="" className="no-underline near-white link black bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" >
                                                <div className="f6 ml3 pr2">Read More</div>
                                            </a>
                                        </a>
                                    </div>
                                </Link>
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
else{
    return(
    
    <div className="">
      <img className="spinner" src="assets/spinner.gif" alt="Loading ..."/>
    </div>
    );
  }
}
}

News.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func,
  news: PropTypes.array
};

News.defaultProps = {
  news: []
};
function mapStateTopProps(state) {
  return {
    news: state.news.collection
  };
}
export default connect(mapStateTopProps)(News);