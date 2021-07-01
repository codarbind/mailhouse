import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Banner from '../components/banner';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PrivacySwitch from '../components/privacyswitch';
import {Helmet} from "react-helmet"


const useStyles = makeStyles({
	emailToCopyTo:{
		width:'80%',
		marginBottom: '5%',
		fontColor:'#007bff',
	},
	
	emailFieldLabel:{
			color:'#007bff',
			float:'left',
			marginLeft:'10%',
			fontWeight:'bold',
	},

});



function CreateMail(){



const classes = useStyles();

const [fileOk,setFileOk] = React.useState(false);
const [copyLink,setCopyLink] = React.useState(false);
const [ccid,setCcid] = React.useState();
let filevalidation = () => { 
    const fi = document.getElementById('file'); 

    // Check if any file is selected. 
    if (fi.files.length > 0) { 
      for (let i = 0; i <= fi.files.length - 1; i++) { 

        const fsize = fi.files.item(i).size; 
        const file = Math.round((fsize / 1024)); 
        // The size of the file. 
        if (file >= 1024*20) { 
          setFileOk(false);
          alert( 
          "File too Big, please select a file less than 20mb"); 
        
        }  else { 

          alert('File size ok, proceed');
          if( (document.getElementById('description').value.length === 0) && (document.getElementById('senderEmail').value.length === 0)){
          setFileOk(false);
          }else{
            setFileOk(true);
          }
          
      
        } 
      } 
    } 
  }

  let meowSender = (e) =>{
    e.preventDefault();
   if( (document.getElementById('description').value.length === 0) || (document.getElementById('mailSubject').value.length === 0)){
    alert('you need to complete the required fields, please');
    setFileOk(false);
   } else{
    setFileOk(true);

   var formdata = new FormData();
var formDetails = document.querySelector("form");
var attachmentObject = document.getElementById("file");
formdata.append("attachment", attachmentObject.files[0], attachmentObject.files[0].name);
formdata.append("sendersmail", document.getElementById('senderEmail').value);
formdata.append("subject", document.getElementById('mailSubject').value);
formdata.append("mailbody", document.getElementById('description').value);
formdata.append("coverage", document.getElementById('privacy').checked);
formdata.append("date", new Date().toString());
var requestOptions = {
  method: 'POST',
  body: formdata,
};

fetch(`${process.env.REACT_APP_BACKEND_URL}/meowsender`, requestOptions)
  .then(response => response.json())
  .then(result => {
      setCcid( result);
    setCopyLink(true);

                })
  .catch(error => console.log('error', error));

   }
    
  }

  var linkToCopy = `https://mailhouse.com.ng/copy/${ccid}`;

	   
return(
	<div>
   <Helmet>
        <title>{`Share Mail/File to Millions - Mailhouse`}</title>
    </Helmet>

    <Banner />
    <Container fixed style={{padding:'auto'}}>
    <form id='formDetails'>
    <div><h3 style={{color:"#007bff"}}>MAIL A FILE - GET A LINK</h3></div>
    <span className={classes.emailFieldLabel}>Enter Your Email Address - <i>optional</i></span><TextField id='senderEmail' autofocus label="Email Address" variant="outlined" className={classes.emailToCopyTo} placeholder='enter an email address to have this mail in your dashboard'/>
    <span className={classes.emailFieldLabel}>Enter The Subject of This Mail - <i>required</i></span><TextField required onMouseOut={filevalidation} id='mailSubject' label="Mail Subject" variant="outlined" className={classes.emailToCopyTo} placeholder='enter the subject of this email and file'/>
    <span className={classes.emailFieldLabel}>What is This Mail/File About? - <i>required</i></span><TextField required onMouseOut={filevalidation} multiline id="description" label="Describe the Mail" variant="outlined" rows={10} className={classes.emailToCopyTo} rowsMax={Infinity} placeholder="Describe the file and reason why people should copy it here. This should be your cover letter if it is a CV/Resume you are attaching" />
    <Button
        
        variant="contained"
        component="label"
        className={classes.emailToCopyTo}
        onChange={filevalidation}
      >
          <input
            type="file"
            id="file"
            name = "attachment"
            required
            accept='.pdf, .mkv, .mp3, .mp4, .DOC, .DOCX, .HTML, .HTM, .XLS, .XLSX, .PPT, .PPTX, .jpeg, .jpg, .bmp, .png, .TXT'
          />
          
    </Button><br/>
    <PrivacySwitch /><br/>
    {!copyLink && fileOk && (<Button className={classes.emailToCopyTo} onClick={meowSender}  variant="contained" color="primary"  type="submit" ><span id="submit">SEND NOW - Get The Link</span></Button>)}
    </form>
    {copyLink && (<div><span className={classes.emailFieldLabel}>Below is the link to your mail - Copy it and keep sharing. Ready next min!</span><TextField id='copyLink' variant="outlined" className={classes.emailToCopyTo} value={linkToCopy} readonly/></div>) }
    </Container>
  </div>
  )
}

export default CreateMail