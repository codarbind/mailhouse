import React from 'react';
import ResidentCard from '../components/residentcard';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Banner from '../components/banner';

var homeItems;

const useStyles = makeStyles({
	emailToCopyTo:{
		width:'80%',
		marginBottom: '5%',
		fontColor:'#007bff',
	},
	
	emailFieldLabel:{
			color:'red',
			float:'left',
			marginLeft:'10%',
			fontWeight:'bold',
	},

});



function LivingRoom(){

const classes = useStyles();


const [isLoaded,setIsLoaded] = React.useState(false);

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

    <Banner />
    <Container fixed style={{padding:'auto'}}>
      {(isLoaded && (<div><h3 style={{color:"#007bff"}}>RECENT RESIDENTS</h3>
          <p>These are some of the recently shared mails/files, copy as many as you like!</p><span className={classes.emailFieldLabel}>Enter an Email Address to Use Throughout</span><TextField id='generalEmail' autofocus label="Email Address" variant="outlined" className={classes.emailToCopyTo} placeholder='enter an email address to avoid repetition'/></div>	) )}
      {(isLoaded && homeItems) || (!isLoaded && (<p>Loading</p>))}
    </Container>
  </div>
  )


}


export default LivingRoom