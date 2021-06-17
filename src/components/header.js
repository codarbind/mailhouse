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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingTop:'2%',
  },
  menuDiv:{
    color:'white',
    float:'right',
    marginLeft:'60%',
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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           
          </IconButton>
          <Typography variant="h6" className={classes.menuButton} Component={Link} to='/'>
           <h4 ><Link to='/' className={classes.headerName}> Mail📫House</Link></h4>
          </Typography>
          <div className={classes.menuDiv}>
          <MenuGrid/>
          </div>
         
        </Toolbar>
    
      </AppBar>
    </div>
  );
}
