import React from 'react';
import Banner from '../components/banner'
import {Helmet} from 'react-helmet'



export default function About(){
	
	return(
	<div>
		<Helmet>
			<title>{`How It Works`} - About MailHouse</title>
		</Helmet>
		<Banner/>
		<p>something about</p>
	</div>

	)
}