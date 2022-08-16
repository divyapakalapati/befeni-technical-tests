import React ,{ useRef } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';;
import ClientBase from './befeni-fabric-api-wrapper.js';
import { Spinner } from 'reactstrap';
import {get_code} from './getFabricCode';
import TableComponent from './TableComponent.jsx';
import CarouselComponent from './CarouselComponent.jsx';
import StarComponent from './StarComponent.jsx';
import ImageComponent from './ImageComponent.jsx';

const App = () => {	
	const [data, setData] = useState([]);
	const [IsLoading, setIsLoading] = useState(true);
	const location = useLocation();
	const navigate = useNavigate();
	const scrollToRef = useRef();
	let code;
	let c = useParams().code;
	if(!c){
		c = '22';
	}
	code = get_code(c);
	
	
	useEffect(() => {
		console.log("useLocation1",(location.pathname === '/'));
	 	if(location.pathname === '/'){
			navigate('/fabrics/22');
		}
  		const getData = async () => {
  			const config = {
				shopBaseUrl: '',
				apiBaseUrl: 'https://production.befeni.net/api/v2',
			};
  			const client = new ClientBase(config, 'de');
			const visitorToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkZDE2OTZkMWU4ODkxNGUyZjhhYTcyZWYwZTc2MDkzYzE1NmRkOWUxYmIxNzYwYjM3ZDQxNGZjODE2ODkyYjNiNmExMTUzNGFkYWU3OGQ5In0.eyJhdWQiOiIxIiwianRpIjoiMGRkMTY5NmQxZTg4OTE0ZTJmOGFhNzJlZjBlNzYwOTNjMTU2ZGQ5ZTFiYjE3NjBiMzdkNDE0ZmM4MTY4OTJiM2I2YTExNTM0YWRhZTc4ZDkiLCJpYXQiOjE2NDMxMzQzNzEsIm5iZiI6MTY0MzEzNDM3MSwiZXhwIjoxNjc0NjcwMzcwLCJzdWIiOiIxMjYzOTIiLCJzY29wZXMiOlsiYnV0dG9uX2NvbG9yX2xpc3RfaXRlbXMiLCJmYWJyaWNfbGlzdF9pdGVtcyIsImZhYnJpY19jb21wb3NpdGlvbl9saXN0X2l0ZW1zIiwiZmFicmljX2ZhbWlseV9saXN0X2l0ZW1zIiwic2hpcnRfZ2FsbGVyeV9saXN0X2l0ZW1zIiwic2hpcnRfZ2FsbGVyeV91cGRhdGVfcHJlZmVyZW5jZSIsInRocmVhZF9jb2xvcl9saXN0X2l0ZW1zIiwiZmFicmljX2Jvb2tfbGlzdF9pdGVtcyIsImZhYnJpY19ib29rX2dldF9pdGVtIiwiZmFicmljX2Jvb2tfY3JlYXRlX2l0ZW0iLCJmYWJyaWNfYm9va191cGRhdGVfaXRlbSIsImZhYnJpY19ib29rX2RlbGV0ZV9pdGVtIiwiZmFicmljX2Jvb2tfdXBkYXRlX3ByZWZlcmVuY2UiLCJmYWJyaWNfYm9va19jYXRlZ29yeV9saXN0X2l0ZW1zIiwiZmFicmljX2Jvb2tfY2F0ZWdvcnlfZ2V0X2l0ZW0iLCJmYWJyaWNfYm9va19jYXRlZ29yeV9jcmVhdGVfaXRlbSIsImZhYnJpY19ib29rX2NhdGVnb3J5X3VwZGF0ZV9pdGVtIiwiZmFicmljX2Jvb2tfY2F0ZWdvcnlfZGVsZXRlX2l0ZW0iXX0.eANAS7g1HjMrsKr96htF3UzVZ1jGK7djI51x7lQaBHTRH01zRmc9miUn-STreLfrBLy7NIUxAX2H4a6OGdBGbAsZPxAxiZHtfiu906gIZAmOIj3PYdXBpiFvSip_37UMW4KkQlrEIUlozlEWBFXe0jcUYtm-SUsIDZrtxgCQTNgsMVTqM_y-TPHg-9ZoorfklYzTn2gcKmcnaqZZgkxYECquPdrGPxUTJ3ZiBOGTji-Q8GMIFEjrShOZ7V4Xvde8xXS9u4p7_eCEz68fOwc6Ows-JpV4OrR5PjH7sgOMTi7h4Dx_jYqQoZrLCxf2VHJMop-B-mwEwcUHXq31f9n0aivPbJuCGXpabPkM9M6zl_LA7AhgSGNlhuTWLmV1g1mVPoKtPV1Pt_l_iWI14z9s4-1e0_URchB6HEc8Be-BVKP08MfNItg-CIlwo5CifuSz7wazIaz5JUjZZEeaJIPI4m_TZ60-jtQuBLscvFv07Axl_kY6PAwasPYnYgdgrVlKfvlEFMSTiZBFjaZ0Z4nj19hGImEJ_0K2JT8UqfBrH14lM33KH1f7MmMocU0rXb-Ad89BTQcwvvXhkE6hHhJqgO3lzJ9PoLfExfIl3VV1lQ3ChvvdPoiCrU1TIvHt5Ttflwo4PJEpiFnAdy_KHLxsa8XnZ-MZHgrXsRMYAUAJ2Ow';
		  	client.updateAccessTokenDirectly(visitorToken);
		   const data = await client.getFabric(code);
		   setIsLoading(false);
		   console.log("data111", data);
		   setData(data);
  		};

	   getData();

	   return () => {
	    	console.log("component unmounted");
	    // this now gets called when the component unmounts
	   };
}, []);

	return (
	<Container>
		{
         IsLoading &&
         <div className="loader">
           <Spinner color="light" />
         </div>
      }
		<Row> 
			<Col  md={{ order: 'first'}}> <h1>{data.name}</h1> </Col>
			<Col xs={{ order: 'last' }} sm={{ order: 'first'}} md={{ order: 'first' }} lg={{ order: 'last' }}><h1 className="text-sm-start f-code"> {useParams().code}</h1> </Col>
			<Col xs={4}> <a className="d-header d-xs-none d-md-block d-lg-none d-link" onClick={() => scrollToRef.current.scrollIntoView()}> View Design Inspiration > </a> </Col>
			
		</Row>
		<Row> 
			<Col xs={12} md={6}>
	          <CarouselComponent details={data.fabricImages}/>
	      </Col>
	      <Col xs = {12} md={6}>
	         <TableComponent details={data}/>
	         <div className='rating-container'>
					<div className='rating'>
						<span className='rating-label'> Ironing </span>
						<StarComponent details={data.ironing}/>
					</div>
					<div className='rating'>
						<span className='rating-label'>Comfort </span>
						<StarComponent details={data.comfort}/>
					</div>
				</div>
			</Col>
			<Col xs={12}>
			<button className="btn btn-dark d-md-none d-button" onClick={() => scrollToRef.current.scrollIntoView()}>
	        View Design Inspiration 
	      </button>
	      </Col>
	      	 
		</Row>
		<Row>
		  	<hr/>
		 	<div ref={scrollToRef}><h2>Design Inspiration</h2></div>
		 	<ImageComponent />
		</Row>	
	</Container>
	);

	
	
}



export default App;





