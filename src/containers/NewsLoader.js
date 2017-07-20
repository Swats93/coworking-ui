import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isUndefined} from 'lodash';

import {slide as Menu} from 'react-burger-menu';
import Header from './Header';
import Footer from './Footer';
import {fetchNewsById} from '~/modules/news';

class NewsLoader extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (Object.keys(this.props.singleNews).length === 0) {
      this.props.dispatch(fetchNewsById(this.props.routeParams.id));
    }
  }

  render() {
    const {singleNews} = this.props;
    return (
      <div>
        <div className='w-100 cover min-vh-100 bg-transparent ' >
          <div className='w-100 cf ph4 white bg-navy'>
          <Header />
          </div>

          <div className='w-100 ph4 mt5 center bg-white'>
            <img className='w-100 bg-center' src={singleNews.images} />
            <p className='f2'>{singleNews.heading}</p>
            <p className='f5'>{singleNews.date_time}<br/>
              {singleNews.author} <br/>
            </p>
          </div>
        </div>
      <Footer/>
    </div>
    );
  }
}

NewsLoader.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func,
  singleNews: PropTypes.object
};

NewsLoader.defaultProps = {
  singleNews: {}
};

function mapStateTopProps(state, componentProps) {
  return {
    singleNews: (state.news.collection ? state.news.collection : []).find(e => e.id === componentProps.routeParams.id) || state.news.singleNews
  };
}
export default connect(mapStateTopProps)(NewsLoader);
