import React from 'react';
import Banner from '../components/banner'
import {Helmet} from 'react-helmet'



export default function Signup(){

	const [intrestedInSignUp, setintrestedInSignUp] = React.useState(17885);


	 fetch(`${process.env.REACT_APP_BACKEND_URL}/accounts`)
            .then(response => response.json())
            .then(result => {
                
            })
	
	return(
	<div>
		<Helmet>
			<title>{`At the Begining`} - MailHouse</title>
		</Helmet>
		<Banner/>
		<div><h3 style={{color:"#007bff"}}>Signup / Login and Dashboard are coming soon!!</h3></div>
		<p>{intrestedInSignUp}</p>
		<p>Interests are ramping up, we are listening, your account and dashboard would be ready soon, please.</p>
	</div>

	)
}