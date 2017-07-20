import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from '~/containers/App';
import Landing from '~/containers/Landing';
import Events from '~/containers/Events';
import News from '~/containers/News';
import Nac from '~/containers/Nac';
import NewsLoader from '~/containers/NewsLoader';
import LocDetails from '~/containers/LocDetails';
import AboutUs from '~/containers/AboutUs';
import Locations from '~/containers/Locations';
import Plans from '~/containers/Plans';
import Contact from '~/containers/Contact';

const Routes = () => (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path='/' component={App}>
      <IndexRoute component={Landing} />
      <Route path='/news' component={News}/>
      <Route path='/news/:id/newsLoader' component={NewsLoader}/>
      <Route path='/events' component={Events}/>
      <Route path='/events/:id/nac' component={Nac}/>  
      <Route path='/aboutUs' component={AboutUs}/>
      <Route path='/locations' component={Locations}/>
      <Route path='/locations/:id/locDetails' component={LocDetails}/>
      <Route path='/plans' component={Plans}/>
      <Route path='/contact' component={Contact}/>
	</Route>
  </Router>
);

render(<Routes/>, document.getElementById('container'));
