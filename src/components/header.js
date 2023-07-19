import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import MenuGrid from '../components/menugrid';
import Menumenu from '../components/menumenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: '15px',
  },
  title: {
    flexGrow: 1,
    paddingTop:'2%',
  },
  menuDiv:{
    color:'white',
    float:'right',
    marginLeft:'65%',
  },
  menuoptions:{
    marginLeft:'7px',
    color:'white',
  },
  headerName:{
    decoration:'none',
    color:'white',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth<=425?true:false);

 /* let screenWidth = window.outerWidth;
  function(){
  if (screenWidth<=425){
    setIsMobile(true);

  }else{
    setIsMobile(false);
  }
}


const [toggle, setToggle] = useState(msg ? true : false);

let JIO = function(){
  if (window.innerWidth<=425){
    console.log(2)
    setIsMobile(true);

  }else{
    console.log(1)
    setIsMobile(false);

  }}
*/









  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>
        {isMobile &&(<div><Menumenu /></div>)}
          <Typography variant="h6" className={classes.menuButton} Component={Link} to='/'>
           <h4 ><Link to='/' className={classes.headerName}> DCL</Link></h4>
           
          </Typography>

          {!isMobile &&(<div className={classes.menuDiv}>
          <MenuGrid/>
          </div>)}
         
        </Toolbar>
    
      </AppBar>
    </div>
  );
}
