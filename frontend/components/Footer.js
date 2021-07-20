import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
// import { ScrollTo } from "react-scroll-to";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
	.multi-border-wrapper-footer {
		z-index: -2;
	}

	.multi-border li:nth-child(1) {
  		background: ${props => props.theme.green};
	}

	.multi-border li:nth-child(2) {
  		background: ${props => props.theme.green};
	}

	.multi-border li:nth-child(3) {
  		background: ${props => props.theme.green};
	}

	.multi-border li:nth-child(4) {
  		background: ${props => props.theme.green};
	}

	.multi-border li:nth-child(5) {
  		background: ${props => props.theme.green};
	}

	ul.multi-border {
	  	list-style:none;
	  	width:100%;
	  	font-size:0;
	  	padding:0;
	}

	.multi-border li {
	  	display:inline-block;
	  	width:20%;
	  	height:7px;
	}
	
	#footer {
    	background: ${props => props.theme.grey};
	}

	.multi-border-wrapper-footer .multi-border {
	  	margin: 0;
	}

	section {
	    padding: 60px 0;
	}

	section .section-title {
	    text-align: center;
	    color: #007b5e;
	    margin-bottom: 50px;
	    text-transform: uppercase;
	}

	.footer-logo {
		max-width: 140px;
		margin: 0 auto;
	}

	#footer h5{
	  	padding-left: 0px;
	    padding-bottom: 6px;
	    margin-bottom: 20px;
	    color:#ffffff;
	}

	#footer a {
	    color: #ffffff;
	    text-decoration: none !important;
	    background-color: transparent;
	    -webkit-text-decoration-skip: objects;
	}

	#footer .svg-inline--fa {
	    font-size: 40px;
	}

	#footer ul.social li{
	  	padding: 3px 0;
	}

	#footer ul.social li a i {
	    margin-right: 5px;
	  	font-size:25px;
	  	-webkit-transition: .5s all ease;
	  	-moz-transition: .5s all ease;
	  	transition: .5s all ease;
	}

	#footer ul.social li:hover a i {
	  	font-size:30px;
	  	margin-top:-10px;
	}

	#footer ul.social li a,
	#footer ul.quick-links li a{
	  	color: ${props => props.theme.white};
	  	cursor: pointer;
	}

	#footer ul.social li a:hover{
	  	color:#eeeeee;
	}

	#footer ul.quick-links li{
	  	padding: 3px 0;
	  	-webkit-transition: .5s all ease;
	  	-moz-transition: .5s all ease;
	  	transition: .5s all ease;
		z-index: -1;
	}

	#footer ul.quick-links li:hover{
	  	padding: 3px 0;
	 	margin-left:5px;
	  	font-weight:700;
	}

	#footer ul.quick-links li a i{
	  	margin-right: 5px;
	}

	#footer ul.quick-links li:hover a i {
	    font-weight: 700;
	}

	@media (max-width:767px){
	  #footer h5 {
	      padding-left: 0;
	      border-left: transparent;
	      padding-bottom: 0px;
	      margin-top: 20px;
	      margin-bottom: 10px;
	  }

	  .footer-logo {
	      text-align: ${props => props.theme.footerLogoResponsive};
	  }
	}
	.row {
		justify-content: center;
	}
`;


export default function Footer() {
    return (
	<StyledFooter>
		<div className="multi-border-wrapper-footer col-lg-12 px-0">
			<ul className="multi-border">
			    <li></li>
			    <li></li>
			    <li></li>
			    <li></li>
			    <li></li>
		  	</ul>
	  	</div>
		<section id="footer">
			<div className="container">
				<div className="footer-logo my-2">
					<img className="footer-logo" src="/static/logo-white.png" />
				</div>
				<div className="row text-center text-xs-center text-sm-left text-md-center">
					<div className="col-xs-12 col-sm-4 col-md-4 site-map-title">
						<h5>Site Information</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<Link activeClassName='active' href="/">
									<a>Dashboard</a>
								</Link>
							</li>
							<li>
								<Link activeClassName='active' href="/news">
									<a>News</a>
								</Link>
							</li>
							<li>
								<Link activeClassName='active' href="/players">
									<a>Players</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-4 site-map-title">
						<h5>Quick links</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<Link activeClassName='active' href="/matches">
									<a>Matches</a>
								</Link>
							</li>
							<li>
								<Link activeClassName='active' href="/teams">
									<a>Teams</a>
								</Link>
							</li>
							<li>
								<Link activeClassName='active' href="/signin">
									<a>Sign In/Sign Up</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
						<ul className="list-unstyled list-inline social text-center">
							<li className="list-inline-item"><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
							{/*<li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>*/}
							<li className="list-inline-item"><a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
						</ul>
					</div>
				</div>	
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
						<p className="h6">All rights Reserved.<span> &copy; Footy Green</span></p>
						<p className="h6"><span>Designed &amp;
						 Developed By Michael Sokan</span></p>
					</div>
				</div>	
			</div>
		</section>
  	</StyledFooter>
    );
}