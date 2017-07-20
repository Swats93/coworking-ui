import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import {slide as Menu} from 'react-burger-menu';

import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router';
// import Events from './Events';
import {apiBase} from 'config';

class Take_Tour extends Component {
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
        </div>
        <div className = "w-100">
        <div className="w-100 fl cf pa2-ns">
        <main className="pa4 black-80">
  <form className="measure ">
    <fieldset id="" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Have a Question ? Send a message !!</legend>
      <div className="mt3">
        <div className="db fw6 lh-copy f6" for="">Name</div>
        <input className="pa2 input-reset ba bg-transparent   w-100" type="" name=""  id=""/>
      </div>
      <div className="mt3">
        <div className="db fw6 lh-copy f6" for="email-address">Email</div>
        <input className="pa2 mw6-ns input-reset ba bg-transparent   w-100" type="" name="email-address"  id="email-address"/>
      </div>
      <div className="mt3">
        <div className="db fw6 lh-copy f6" for="email-address">Phone Number</div>
        <input className="pa2 input-reset ba bg-transparent  w-100" type="" name=""  id=""/>
      </div>
      <div className="mv3">
        <div className="db fw6 lh-copy f6" >Message</div>
        <textarea className="b--black pa2 h4 input-reset ba bg-transparent w-100 "  name=""  id=""/>
      </div>
      
    </fieldset>
    <div className="">
      <input className="b white ph3 pv2 input-reset ba b--white bg-black grow pointer f6 dib" type="submit" value="Send"/>
    </div>
  </form>
</main>
</div>

    </div>
        </div>
      </div>
        );
    }
}

Take_Tour.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateTopProps(state) {
  return {
  };
}

export default connect(mapStateTopProps)(Take_Tour);
