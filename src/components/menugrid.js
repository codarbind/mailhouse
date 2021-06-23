import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    float:'right',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuoptions:{
    marginLeft:'10px',
    color:'white',
  },
}));

export default function MenuGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <Grid container>
          <Grid item xs>
      <Link className={classes.menuoptions} Component={Link} to='/'>HOME</Link>
        </Grid>
        <Grid item xs>
      <Link className={classes.menuoptions} Component={Link} to='/create'>CREATE</Link>
        </Grid>
        <Grid item xs>
      <Link  className={classes.menuoptions}  Component={Link} to='/signup'>SIGNUP</Link>
        </Grid>
          
        </Grid>
    </div>
  );
}
