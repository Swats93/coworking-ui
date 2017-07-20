import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import InstagramIcon from 'react-icons/lib/fa/instagram';
import {slide as Menu} from 'react-burger-menu';
import  {Link} from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  showMenu(ev) {
    ev.preventDefault();
    this.setState({isOpen: true});
  }

  render() {
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    };
    return (
      <nav className='w-100 cf white pv3'>
      <div className='w-100 cf flex items-center'>
        <Link to= '/' className='flex-auto'>
            <div className='dib pointer dim white tl f3 pr6 pl3-ns'>
                DISCOVR
                <div className='f6 orange'>
                    The Coworking Space
                </div>
            </div>
        </Link>
        <div className='dn dib-ns fr' style={{fontSize: '14px', fontWeight: '400'}}>
          <Link to='/aboutUs'>
            <div className='dib pointer white dim pr4 menu-item'>
                ABOUT US
            </div>
          </Link>
          <Link to='/news'>
            <div className='dib pointer white dim pr4 menu-item'>
                NEWS
            </div>
          </Link>
          <Link to='/events'>
            <div className='dib pointer white dim pr4 menu-item' >
                EVENTS
            </div>
          </Link>
          <Link to='/plans'>
            <div className='dib pointer white dim pr4 menu-item'>
                PLANS
            </div>
          </Link>
          <Link to='/locations'>
            <div className='dib pointer white dim pr4 menu-item'>
                LOCATIONS
            </div>
          </Link>
          <Link to='/contact'>
            <div className='dib pointer white dim pr4 menu-item'>
                CONTACT
            </div>
          </Link>

        </div>
        <div className='dib dn-ns' style={{fontSize: '14px', fontWeight: '400'}}>
          <div className='dib pointer dim pr4' onClick={(ev) => this.showMenu(ev)}>
            =
          </div>
        </div>
        {(() => {
          if(this.state.isOpen) {
            return (
              <Menu isOpen={this.state.isOpen}right noOverlay className="white" styles={ styles }>
                <div className='dib pointer dim pr4 menu-item'>
                  ABOUT US
                </div>
                <div className='dib pointer dim pr4 menu-item'>
                  LOCATIONS
                </div>
                <div className='dib pointer dim pr4 menu-item'>
                  PLANS
                </div>
                <div className='dib pointer dim pr4 menu-item'>
                  NEWS
                </div>
                <div className='dib pointer dim pr4 menu-item'>
                  EVENTS
                </div>
                <div className='dib pointer dim pr4 menu-item'>
                  CONTACT
                </div>
              </Menu>
            );
          }
        })()}
      </div>
      </nav>
    );
  }
}
