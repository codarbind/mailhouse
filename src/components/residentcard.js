import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import ShareIcon from '@material-ui/icons/Share';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import SimpleAlerts from '../components/alert';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SimpleBadge from '../components/badge';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '90%',
    textAlign:'left',
    margin:'auto',
    marginBottom:'15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    //transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  copyform:{
    margin:'auto',
  },
  copyThis:{

    backgroundColor:'white',
    color:'blue',
    borderColor:'orange',
    fontSize:'15px',

  },
  emailField:{
    height:'20%',
    width:'70%',

  },
  submitButton:{
    height:'55px',
    width:'20%',
    float:'right'
  }
}));

const helpWithEmailInput =(e)=>{

  let generalEmail = document.getElementById('generalEmail').value;
  setTimeout(function(){
    document.getElementById('email-'+e.target.id.slice(7)).value = generalEmail;},0.0000001);
  
}

const checkProperEmailFormat=(emailEntered)=>{
  let includesAt = emailEntered.includes('@');
  let atSign = emailEntered.indexOf('@') === emailEntered.lastIndexOf('@');
  let dotSign = emailEntered.lastIndexOf('.') > emailEntered.lastIndexOf('@');
  let dotNotLast = emailEntered.length -1 > emailEntered.lastIndexOf('.');
  let dotNotStart = emailEntered.indexOf('.') !== 0;
  let atNotStart = emailEntered.indexOf('@') !==0;
  let atNeighborNotDots = emailEntered[emailEntered.lastIndexOf('@') - 1] !== '.' && emailEntered[emailEntered.lastIndexOf('@') + 1] !== '.'
  return (atSign && dotSign && includesAt && dotNotLast && dotNotStart && atNotStart && atNeighborNotDots);
}






export default function RecidentCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [send, setSend] = React.useState(false);
  const [alarm, setAlarm] = React.useState(false);
  const [linkModal, setLinkModal] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
      
      };

      const activateSendProcess =(e) =>{

                  e.preventDefault();
        
                  setAlarm(false);
                  setSend(true);
                                                  

                  if(!e.target.id){

                  let id =e.target.firstChild.id.slice(5);

                  id = (id)? id : e.target.id.slice(5); //if ENTER WAS USED TO SUBMIT/SEND

                  meowCopier(

                    {
                      subjectFetched:id,
                      copiersmail:document.getElementById('email-'+id).value,
                 }
                 ) 

               }else{

                    setAlarm(false);
                    setSend(true);
                    
                  
                let id =e.target.id.slice(5);

                meowCopier(
                  {
                    subjectFetched:id,
                    copiersmail:document.getElementById('email-'+id).value,
                  }
                  )


              }
      }

    function meowCopier(detailsOfMailToCopy){


      if (!checkProperEmailFormat(detailsOfMailToCopy.copiersmail)){
        setSend(false);
        return setAlarm(true);
      }

          var urlencoded;
          urlencoded = new URLSearchParams();
          urlencoded.append('subjectFetched',detailsOfMailToCopy.subjectFetched);
          urlencoded.append('copiersmail',detailsOfMailToCopy.copiersmail);
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
          };

          fetch(`${process.env.REACT_APP_BACKEND_URL}/meowCopier`, requestOptions)
            .then(response => response.json())
            .then(result => {
                //alert("That\'s on its way!!");
              
                
               })
              }



  function LinkToMail(props) {

const [open, setOpen] = React.useState(true);


  const handleClose = () => {
      setOpen(false);
      setLinkModal(false) ;
     };

  return (
    <div >
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        id='linkToMailDiv'
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.mailDetails.subject}
          </DialogContentText>
        </DialogContent>

        <DialogTitle id="alert-dialog-title">https://mailhouse.com.ng/copy/{props.mailDetails.ccid}</DialogTitle>

      </Dialog>

    </div>
  );
}

    function showLink (){
      setLinkModal(true);
    }

   
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="subject" className={classes.avatar}>
            {props.mailDetails.subject[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.mailDetails.subject}
        subheader={props.mailDetails.whenCreated}
      />
     
      <CardContent>
        <Typography variant="body2" color="black" component="p">
          {props.mailDetails.snippet}
          <p/>
          <i>... you have to copy the mail to see the whole body content</i>
          <p/>
        </Typography>
        <Typography>
        <span><AttachFileIcon/></span>
        {props.mailDetails.attachmentName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

      <SimpleBadge mailDetails={props.mailDetails}/>
      <IconButton>
        <ShareIcon onClick={showLink}/>
      </IconButton>
       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="copy this"
          >
         
          <Button variant="contained" color="primary"  onClick={helpWithEmailInput} id={'button-'+props.mailDetails.subject+' '+props.mailDetails.ccid}>
           <span id={'botton-'+props.mailDetails.subject+' '+props.mailDetails.ccid}>COPY THIS</span>
          </Button>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
      
          <div>

              <form className={classes.copyform} noValidate autoComplete="on" onSubmit={activateSendProcess}  id={'fend-'+props.mailDetails.subject+' '+props.mailDetails.ccid}>
              <TextField id={'email-'+props.mailDetails.subject+' '+props.mailDetails.ccid} label="Email Address" variant="outlined" className={classes.emailField}  />
              <Button

                  variant="contained"
                  color="primary"
                  
                  
                className={classes.submitButton}

                 onClick={activateSendProcess}

               


                 id={'xend-'+props.mailDetails.subject+' '+props.mailDetails.ccid}
                 
            >
                  <span 
                  
                  id={'send-'+props.mailDetails.subject+' '+props.mailDetails.ccid} >Send</span>

              </Button>
              </form>

              </div>
          {alarm && (<SimpleAlerts severity='error' />) }
          {send && (<SimpleAlerts severity='info' />) }
          
        </CardContent>
      </Collapse>
      {linkModal && (<LinkToMail mailDetails={props.mailDetails} />)}
    </Card>
  );
}
