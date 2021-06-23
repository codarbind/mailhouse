import React from 'react';
import Banner from '../components/banner'
import {Helmet} from 'react-helmet'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



export default function Search(){

let useStyles = makeStyles(()=>({
	searchDiv:{
		width:'75%',
		margin:'auto'
	},
	searchInput:{
		width:'100%',
		height:'40px',
		fontSize:'25px',
		fontColor:'#007bff',
		color:'#007bff',
		borderColor:'#007bff',
		borderWidth:'5px'
	},
	searchButton:{
		marginTop: '9px',
		marginBottom: '15px',
	},

}));

let classes = useStyles();


var searchKeywordsElem = document.getElementById('searchInput');
var searchKeywords = searchKeywordsElem ? searchKeywordsElem.value: "";
	
	return(
	<div>
		<Helmet>
			<title>{`Search public mails/files/cv`} - MailHouse</title>
		</Helmet>
		<Banner/>
		<h3 style={{color:"#007bff"}}><b>SEARCH PUBLIC MAILS & FILES</b></h3>
		<div className={classes.searchDiv}><input id='searchInput' className={classes.searchInput} placeholder='enter keywords here' type='search' />
		<Button className={classes.searchButton} variant="contained" color="primary" onClick={()=>{alert('searchKeywords')}}>SEARCH</Button>
		</div>
	</div>

	)
}