import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 250,
    height: 30,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(220px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      id="privacy"
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


export default function PrivacySwitch() {
  const [state, setState] = React.useState({
    checked: true,
  
  });

  
  const [privateMail, setPrivateMail] = React.useState(false);
  const [privacyLabelPlacement, setPrivacyLabelPlacement] = React.useState('start');
  const [privacyLabel,setPrivacyLabel] = React.useState('Make Private');




  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setPrivateMail(!privateMail);

      if (privateMail){
    setPrivacyLabel("MAKE PRIVATE");
    setPrivacyLabelPlacement("start");
  }else{
    setPrivacyLabel("MAKE PUBLIC");
    setPrivacyLabelPlacement("end");
  }
  };

  return (
   
   
      <FormControlLabel
        control={<IOSSwitch checked={state.checked} onChange={handleChange} name="checked" />}
        label={privacyLabel} labelPlacement={privacyLabelPlacement} 
      />

   
  );
}
