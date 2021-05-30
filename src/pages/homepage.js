import React from 'react';
import ResidentCard from '../components/residentcard';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import background from '../assets/img/mailhouseheader.jpg';
import ButtonAppBar from '../components/header1';

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



function LivingRoom(){

const classes = useStyles();


const [isLoaded,setIsLoaded] = React.useState(false);



function populateEmail(e){
	let topEmailInputted = e.target.value;
	console.log(topEmailInputted);
}

	 fetch(`${process.env.REACT_APP_BACKEND_URL}`)
    .then(results=>results.json())
    .then(results=>{
     
  homeItems =   results.map(result=>{
  	var mailDetails = {
  		subject:result._fieldsProto.subject.stringValue,
  		snippet:result._fieldsProto.snippet.stringValue,
  		whenCreated:result._fieldsProto.whenCreated.stringValue.slice(4,15),
  		attachmentName:result._fieldsProto.attachmentName.stringValue,
  		ccid:result._fieldsProto.ccid.stringValue,

  	};

   	return(
   		<ResidentCard mailDetails = {mailDetails}/>
  
	)}

	)
setIsLoaded(true);
});
    
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

       
          <h3 style={{color:"#007bff"}}>RECENT RESIDENTS</h3>
          <p>These are some of the recently shared mails/files, copy as many as you like!</p>
    
        <CssBaseline />
      <Container fixed style={{padding:'auto'}}>
      
      {(isLoaded && (<div><span className={classes.emailFieldLabel}>Enter an Email Address to Use Throughout</span><TextField id='generalEmail' autofocus label="Email Address" variant="outlined" className={classes.emailToCopyTo} placeholder='enter an email address to avoid repetition'/></div>	) )}
      {(isLoaded && homeItems) || (!isLoaded && (<p>Loading</p>))}
      </Container>

  </div>
  )


}


export default LivingRoom