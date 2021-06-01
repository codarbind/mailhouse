import React from 'react';
import ResidentCard from '../components/residentcard';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import background from '../assets/img/mailhouseheader.jpg';
import ButtonAppBar from '../components/header';

var homeItems;

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
		//textAlign:'left'
	    flexGrow: 1,
	    fontFamily: "ZCOOL KuaiLe, cursive",
	    fontWeight: 500,
	    color: "#0047AB",
	    fontSize:"25px",
	    fontWeight:'bold',
	    marginBottom:'15px', 
	}
});



function Banner(){

const classes = useStyles();


const [isLoaded,setIsLoaded] = React.useState(false);

    
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