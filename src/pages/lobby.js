import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import ResidentCard from '../components/residentcard';
import Banner from '../components/banner';
 

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
  },
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
}));


const checkProperEmailFormat=(emailEntered)=>{
  let includesAt = emailEntered.includes('@');
  let atSign = emailEntered.indexOf('@') !== emailEntered.lastIndexOf('@');
  let dotSign = emailEntered.lastIndexOf('.') > emailEntered.lastIndexOf('@');
  let dotNotLast = emailEntered.length -1 > emailEntered.lastIndexOf('.');
  let dotNotStart = emailEntered.indexOf('.') !== 0;
  let atNotStart = emailEntered.indexOf('@') !==0;
  let atNeighborNotDots = emailEntered[emailEntered.lastIndexOf('@') - 1] !== '.' && emailEntered[emailEntered.lastIndexOf('@') + 1] !== '.'
  return (atSign && dotSign && includesAt && dotNotLast && dotNotStart && atNotStart && atNeighborNotDots);
}

export default function Meowcopier(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [send, setSend] = React.useState(false);
  const [alarm, setAlarm] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [mailDetails, setMailDetails] = React.useState({});
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
      
      };

     let ccid =  ( window.location.search.length > 1)? window.location.search.slice(6) : window.location.pathname.slice((window.location.pathname.lastIndexOf('/') + 1));
    
   
var lobbyDetails;



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

          let urlencoded;
          urlencoded = new URLSearchParams();
          urlencoded.append('subjectFetched',detailsOfMailToCopy.subjectFetched);
          urlencoded.append('copiersmail',detailsOfMailToCopy.copiersmail);
          let myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


          let requestOptions = {
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


          let myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
          let requestOptions = {
            method: 'get',
            headers: myHeaders,
          };
          React.useEffect(() =>{
       fetch(`${process.env.REACT_APP_BACKEND_URL}/copy?ccid=${ccid}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                      
                      mailDetails.subject = result.subjectFetched;
                      mailDetails.snippet = result.snippetFetched;
                      mailDetails.whenCreated = result.whenPosted;
                      mailDetails.attachmentName = result.attachmentName;
                      mailDetails.ccid = ccid;

                      setMailDetails(mailDetails);
                      setIsLoaded(true);
            }).catch((error) => {
            console.error('Error:', error);})},[]);

          lobbyDetails = (<ResidentCard mailDetails={mailDetails}/>);


  return (
    <div>
    <Banner />
    <h3 style={{color:"#007bff"}}><b>{mailDetails.subject}</b></h3>
    <span className={classes.emailFieldLabel} hidden>Enter an Email Address to Use Throughout</span><TextField hidden id='generalEmail' autofocus label="Email Address" variant="outlined" className={classes.emailToCopyTo} placeholder='enter an email address to avoid repetition'/>
    {isLoaded && (lobbyDetails) || !isLoaded && (<span>loading</span>)}
    </div>
    );
}
