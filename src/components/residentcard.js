import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import SimpleAlerts from '../components/alert';

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
    width:'80%',

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






export default function RecidentCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [send, setSend] = React.useState(false);
  
function showSendInfo(){
                    setSend(true);
                    setTimeout(setSend(false),2000);
                  }


  const handleExpandClick = () => {
    setExpanded(!expanded);
      
      };

    function meowCopier(detailsOfMailToCopy){

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

          fetch(`${process.env.REACT_APP_backEndAPI_URL}/meowCopier`, requestOptions)
            .then(response => response.json())
            .then(result => {
                //alert("That\'s on its way!!");
              
                
            })
              }

  let emailFieldId = props.mailDetails.ccid;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
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
        <Typography variant="body2" color="textSecondary" component="p">
          {props.mailDetails.snippet}
          <i>... you have to copy the mail to see the whole body content</i>
        </Typography>
        <Typography>
        <span><AttachFileIcon/></span>
        {props.mailDetails.attachmentName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
         
          <Button variant="contained" color="primary"  onClick={helpWithEmailInput} id={'button-'+props.mailDetails.subject+' '+props.mailDetails.ccid}>
           <span id={'botton-'+props.mailDetails.subject+' '+props.mailDetails.ccid}>COPY THIS</span>
          </Button>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
      
          <div>

              <form className={classes.copyform} noValidate autoComplete="on">
              <TextField id={'email-'+props.mailDetails.subject+' '+props.mailDetails.ccid} label="Email Address" variant="outlined" className={classes.emailField}  />
              <Button

                  variant="contained"
                  color="primary"
                  className={classes.button}
                  
                className={classes.submitButton}

                 onClick={(e)=>{


                  
                  //showSendInfo();

                  
                  setSend(true);
                
                  

                  if(!e.target.id){

                  let id =e.target.firstChild.id.slice(5);

                  meowCopier(

                    {
                      subjectFetched:id,
                      copiersmail:document.getElementById('email-'+id).value,
                 }
                 ) 

               }else{

               // showSendInfo();

                
                    setSend(true);
                    
                  

                  
                let id =e.target.id.slice(5);

                meowCopier(
                  {
                    subjectFetched:id,
                    copiersmail:document.getElementById('email-'+id).value,
                  }
                  )


              }}}


                 id={'send-'+props.mailDetails.subject+' '+props.mailDetails.ccid}
                 
            >
                  <span 
                  
                  id={'send-'+props.mailDetails.subject+' '+props.mailDetails.ccid} disabled>Send</span>

              </Button>
              </form>

              </div>
         
          {send && (<SimpleAlerts />) || send && (<SimpleAlerts/>)}

        </CardContent>
      </Collapse>
    </Card>
  );
}
