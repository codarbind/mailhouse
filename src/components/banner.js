import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import background from '../assets/img/mailhouseheader.jpg';
import ButtonAppBar from '../components/header';

const useStyles = makeStyles({
	emailToCopyTo:{
		width:'80%',
		marginBottom: '5%',
		fontColor:'#007bff',
	},
	poster:{
		height:'500px',
		width:'100%',
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		marginBottom:'5%',
		paddingTop:'100px',
	
	},
	emailFieldLabel:{
			color:'red',
			float:'left',
			marginLeft:'10%',
			fontWeight:'bold',
	},
	contentP:{
		margin:'auto',
	    flexGrow: 1,
	    fontFamily: "ZCOOL KuaiLe, cursive",
	    fontWeight: 500,
	    color: "#0047AB",
	    fontSize:"25px",
	    marginBottom:'15px', 
	}
});

function Banner(){

const classes = useStyles();
   
return(
	<div>

	<ButtonAppBar/>
		 <div className={classes.poster}>
		 <div className={classes.contentP}>
		 <p>👌🏽Signing up not compulsory🤵🏽</p>
		 <p>🔬 Talent head hunting made easier 🛠</p>
		 <p>🗨 Write cold emails without disturbing others 📨</p>
		 <p> ✔ Enjoy files through mails from around the world 🌍 </p>
		 </div>
		 </div>        
     <CssBaseline />
   
  	</div>
  )


}


export default Banner