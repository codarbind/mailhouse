import React from 'react';
import Banner from '../components/banner'
import {Helmet} from 'react-helmet'
import {makeStyles} from '@material-ui/core/styles';



export default function Signup(){

	const useStyles = makeStyles((theme) => ({

			signupInterest:{
				fontSize:'100px',
				color:'#800000',
								
			}

	}));

	let classes = useStyles();

	const [intrestedInSignUp, setintrestedInSignUp] = React.useState(17885);

		React.useEffect(()=>{

			fetch(`${process.env.REACT_APP_BACKEND_URL}/accounts`)
		            .then(response => response.json())
		            .then(result => {
		
		            	setintrestedInSignUp(result);
		                
		            })
		        } ,[]);

	 
	
	return(
	<div>
		<Helmet>
			<title>{`At the Begining`} - MailHouse</title>
		</Helmet>
		<Banner/>
		<div><h3 style={{color:"#007bff"}}>Signup / Login and Dashboard are coming soon!!</h3></div>
		<p className={classes.signupInterest}>{intrestedInSignUp}</p>
		<p>Interests are ramping up, we are listening, your account and dashboard would be ready soon, please.</p>
	</div>

	)
}