import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import {slide as Menu} from 'react-burger-menu';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router';
// import Events from './Events';
import {apiBase} from 'config';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="min-vh-100">
      	
      	<nav className='w-100 cf pv4' style={{backgroundColor: "#917b7f"}}>
      		<div className="tc white f2-ns f3">
      			Booking Confirmation Bawa Hotels Mumbai
      		</div>
      	</nav>

      	<div className="w-100 cf black f4 f3-ns pv3 pa3">
        	<p>Dear Sir, </p>
	        <p>Greetings from Bawa Group of Hotels Mumbai..!!</p>
	        <p>Below is a summary of your booking and room information. We look forward to making your stay as unique, as comfortable and as memorable as possible.
        	</p>
      	</div>

      	<div className="w-100 cf black f2-ns f3 pa3">
      		<div className="w-50-ns fl-ns">
        		<p className="bb b-grey ">Room Reservation Details </p>
        	</div>
      	</div>

      	<div className="w-100 cf pa3 mw7 center avenir ">
      		<div className="fl-ns ba bw2 br4 b-grey">
      			<div className="f3-ns f4 center" style={{marginTop: "-30px", height: "70px", width: "70px"}}>
      				<img className="bg-white" src="https://static1.squarespace.com/static/53c95ab0e4b03157ad24f9ba/t/5824d040e6f2e1eac0b79ebc/1478810960133/survey" />
      			</div>
      			<table className="f6">
      				<tr>
			          <th className="fw6 w5 pa3">Hotel Name</th>
			          <th className="fw6 w4 pa3"></th>
			          <th className="fw6 w5 pa3 ">Bawa</th>
			        </tr>
			        <tr>
			          <th className="fw6 w5 pa3">Guest Name</th>
			          <th className="fw6 w4 pa3"></th>
			          <th className="fw6 w5 pa3 ">Guest Name</th>
			        </tr>
			        <tr>
			          <th className="fw6 w5 pa3">Date Of Arrival</th>
			          <th className="fw6 w4 pa3"></th>
			          <th className="fw6 w5 pa3 ">Date Of Arrival</th>
			        </tr>
			        <tr>
			          <th className="fw6 w5 pa3">Date of Departure</th>
			          <th className="fw6 w4 pa3"></th>
			          <th className="fw6 w5 pa3 ">Date of Departure</th>
			        </tr>
			        <tr>
			          <th className="fw6 w5 pa3">Room Type</th>
			          <th className="fw6 w4 pa3"></th>
			          <th className="fw6 w5 pa3 ">Room Type</th>
			        </tr>
			        <tr>
			          <th className="fw6 w5 pa3">No. Of Room</th>
			          <th className="fw6 w4 pa3"></th>
			          <th className="fw6 w5 pa3 ">No. Of Room</th>
			        </tr>
			        <tr>
			          <th className="fw6 w5 pa3">Room Rate/ Per Night</th>
			          <th className="fw6 w4 pa3"></th>
			          <th className="fw6 w5 pa3 ">Room Rate/ Per Night</th>
			        </tr>
			        <tr>
			          <th className="fw6 w5 pa3">Billing Instruction</th>
			          <th className="fw6 w4 pa3"></th>
			          <th className="fw6 w5 pa3 ">Billing Instruction</th>
			        </tr>
			        <tr>
			          <th className="fw6 w5 pa3">Confirmation No.</th>
			          <th className="fw6 w4 pa3"></th>
			          <th className="fw6 w5 pa3 ">Confirmation No.</th>
			        </tr>
			       </table>
      		</div>
      	</div>

      	<div className="w-100 cf black f2-ns f3 pa3">
      		<div className="w-50-ns fl-ns">
        		<p className="bb b-grey ">Documents Need to Carry </p>
        	</div>
      	</div>

      	<div className="f3-ns f5 pl3">
        	<p>Request you to carry a valid photo id and produce it at the time of check-in</p>
        	<p className= "ml4">1. For Resident Indians: Drivers License, Voter Id or Passport</p>
        	<p className= "ml4">2. For Foreigner's and Non Resident Indians: Passport & Valid Visa</p>
        	<p className= "ml2 f2-ns f3 b">Your Safety and Security is our paramount concern.</p>
        </div>

        <div className="w-100 cf black f2-ns f3 pa3">
      		<div className="w-50-ns fl-ns">
        		<p className="bb b-grey ">Credit Card Details</p>
        	</div>
      	</div>

      	<div className="f3-ns f4 b pl3">
        	<p>Please note that we have confirmed the reservation on the basis of credit card details provided by you.</p>

      		<div className="w-50-ns fl-ns" style={{marginTop: "-120px"}}>
        		<img className="bg-white" src="https://www.shareicon.net/data/2017/05/11/885937_visa_512x512.png" />
        	</div>
        	<div className="w-50-ns fl-ns underline pa3 mt3 f4-ns f5 b">
        		<p className="">Credit Card Number:</p>
        		<p className="">Expiry Date:</p>
        		<p className="">Contact Number:</p>
        	</div>
      	</div>

      	<div className="w-100 cf black f2-ns f3 pa3">
      		<div className="w-50-ns fl-ns">
        		<p className="bb b-grey ">Inclusions</p>
        	</div>
      	</div>

				<div className="w-100 cf pa3">
      		<div className="w-100 fl w-50-ns fl-ns">
      			<div className="w-50 fl">
	        		<img className="bg-white ml5 ml6-ns" style={{ height: "50px", width: "50px"}} src="http://www.iconsdb.com/icons/preview/gray/wifi-xxl.png"/>
	        	</div>
	        	<div className="w-50 fl">
	        		<p className= "b">Free Wifi</p>
	        	</div>
        	</div>

        	<div className="w-100 fl w-50-ns fl-ns">
        		<div className="w-50 fl">
	        		<img className="bg-white ml5 ml6-ns" style={{ height: "60px", width: "60px"}} src="https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-153_caffee-512.png" />
	        	</div>
	        	<div className="w-50 fl">
	        		<p className= "b">Morning Breakfast</p>
	        	</div>
        	</div>
      	</div>

      	<div className="w-100 cf black f2-ns f3 pa3">
      		<div className="w-50-ns fl-ns">
        		<p className="bb b-grey ">Terms of Stay</p>
        	</div>
      	</div>

      	<div className="w-100 cf pa3">
      		<div className="w-50-ns fl-ns">
        		<p className= "pl4 pr4 f3-ns f4">For further clarifications and assistance, please do not hesitate to contact us.</p>
        		<p className= "pl4 pr4 b f3-ns f4">Warm Regards</p>
        	</div>

        	<div className="w-50-ns fl-ns">
	        		<p className= "f5-ns f6 pa3">The hotel check in 1200 hrs. Please check in on time. <br/><br/>
	        		details about hotel, some normal inforamtion fhhuigrgjkr eghuidjnf
	        		kdnivr uigherkngjh	vuihuirhgjkr fugfghdgfe
	        		rguirehjkgj krenfiodh ugihrekjngk jrengiudhfui ghdjknfkjdshg uhkjnfjew hugih ihjwehfuiewhfbijb ibiugui hkj ugu bjbuihgui hjknjuguibjk gyugyuv hjfty ryg jkbjk gyubjk niugyu bjkbjk huih jnjk gytdt fhjbkjgyufyugjkbgjug <br/><br/>
	        		etails about hotel, some normal inforamtion fhhuigrgjkr eghuidjn fkdnivr uigherkngjhvuih uirhgjkrfu gfghdgf erguirehjkgjk renfiodhu gihrekjngkjrengiu dhfuighd jknfkjdshg uhkjnfjewhugih ihjwehfu iewhfbijb ibiugui hkj ugu bjbuihgui hjknjuguibjk gyugyuv hjfty ryg jkbjk gyubjk niugyu bjkbjk huih jnjk gytdt fhjbkjgyufyugjkbgjug b <br/><br/>
	        		etails about hotel, some normal inforamtion fhhuigrgjkr eghuidjnfkdnivru igherkngjhvuihuir hgjkrfugfghdg fergui rehjkgjkrenfiod hugihrekjngkjrengiudhfuigh djknfkjdshg uhkjnfjewhugih ihjwehfuiewhfbijb ibiugui hkj ugu bjbuihgui hjknjuguibjk gyugyuv hjfty ryg jkbjk gyubjk niugyu bjkbjk huih jnjk gytdt fhjbkjgyufyugjk bgjug bbguygyubhjgi uguihihjk  huhugyugj </p>
        	</div>
      	</div>

      	<div className='w-100 cf f5-ns f6 pv4' style={{backgroundColor: "#917b7f"}}>
      		<div className="tc white w-25-ns fl-ns">
      			www.bawahotels.com
      		</div>
      		<div className="tc white w-50-ns fl-ns">
      			Central Reservation, Bawa Group of Hotels
      		</div>
      		<div className="tc white w-25-ns fl-ns">
      			Tel:-0220-39893847
      		</div>
      	</div>








        
      	{/*
      	 Comment Starts here
        <div
          className='w-100 cover min-vh-100'
          style={{
            background: `white`
            }}
        >
        <div className='w-100 cf ph4 white bg-black'>
          <Header />
        </div>
        <div className = "mw8 center avenir">
        <h2 className="baskerville f2 fw1 ph3 ph0-l">Contact Us</h2>
                     <div className="bt bb b--black-10"></div>
        <div className = "w-100">
        <div className="w-100 w-50-m w-50-ns fl cf pa0-ns">
        <main className="pt3-ns pt2 black-80">
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
      <div className="mt3">
        <div className="db fw6 lh-copy f6" >Message</div>
        <textarea className="b--black pa2 h4 input-reset ba bg-transparent w-100 "  name=""  id=""/>
      </div>
      
    </fieldset>
    <div className="pt0-ns">
      <input className="b white ph3 pv2 input-reset ba b--white bg-black grow pointer f6 dib" type="submit" value="Send"/>
    </div>
  </form>
</main>
</div>
<div className="w-100 w-50-m pt3-ns w-50-ns fr cf">
<fieldset id="" className="ba  b--transparent ph0 mh0">
      <legend className="f4 orange pt5-ns center fw6 ph0 mh0">Contact Us</legend>
       <legend className="f2 center mt3-ns fw6 ph0 mh0">Say Hello</legend>
      <div className="mt3 ">
        <p className="b tracked baskerville tc">Coworking Space</p>
        <p className="b tracked baskerville tc">Offices in</p>
        <p className="b tracked baskerville tc">Rajouri, Gurgaon, Rohini, Counnaught Place, Pitampura</p>
        <p className="b tracked baskerville tc">800-456-7890, 800-456-7899</p>
        <p className="b tracked orange baskerville tc">info@discovr.com</p>

      </div>
            
    </fieldset>
    </div>
    </div>



 			
				</div>
				
        </div>
        <Footer/>
        */}
      </div>
        );
    }
}

Contact.propTypes = {
  children: PropTypes.object,
  router: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateTopProps(state) {
  return {
  };
}

export default connect(mapStateTopProps)(Contact);
