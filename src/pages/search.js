import React from 'react';
import Banner from '../components/banner'
import {Helmet} from 'react-helmet'



export default function Search(){
	
	return(
	<div>
		<Helmet>
			<title>{`Search public mails/files/cv`} - MailHouse</title>
		</Helmet>
		<Banner/>
		<p>something</p>
	</div>

	)
}