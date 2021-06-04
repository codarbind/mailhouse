import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts(props) {
  const classes = useStyles();
  let showErrorAlert = (props.severity === 'error')? true : false;
  let errorAlert = <Alert severity={props.severity}>That is not a valid email — not sent!</Alert>;
  let infoAlert = <Alert severity={props.severity}>The mail is on its way — sent!</Alert>;
  return (
    <div className={classes.root}>
          {showErrorAlert && errorAlert}
          {!showErrorAlert && infoAlert}
    </div>
  );
}
