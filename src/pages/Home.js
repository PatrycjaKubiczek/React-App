import React from 'react'
import bigPicture from '../assets/img/big-pic.png';
import smallPicture from '../assets/img/small-pic.png';
import { MDBContainer } from 'mdbreact';
import { Link } from 'react-router-dom'


const Home = () => (
  <div>
		<MDBContainer className="App-main">
		<div className="d-block">
	<a
	className="App-link"
	href="https://reactjs.org"
	target="_blank"
	rel="noopener noreferrer"
	>
	#TechDesign
	</a>

	<a
	className="App-link"
	href="https://reactjs.org"
	target="_blank"
	rel="noopener noreferrer"
	>
	#HealthCare Revolution
	</a>

	<a
	className="App-link"
	href="https://reactjs.org"
	target="_blank"
	rel="noopener noreferrer"
	>
	#Future
	</a>
	</div>
		<Link to='/Post' className="App-link" style={{marginRight: '0px'}}>
			<img src={bigPicture} className="App-logo text-center d-block" alt="logo" />
			<h6 className="font-weight-bold">US</h6>
			<h5>Poverty To Empowerment In Chicago</h5>
		</Link>

		<hr />
		<div className="d-block">
			<img src={smallPicture} className="Small-pic" alt="logo" />
			<h6 className="font-weight-bold">Politics</h6>
			<p>Divided American Lives During War</p>
		</div>

		<hr />
		<div className="d-block">
			<img src={smallPicture} className="Small-pic" alt="logo" />
			<h6 className="font-weight-bold">Tech</h6>
			<p>Divided American Lives During War</p>
		</div>
		</MDBContainer>
  </div>
)

export default Home
