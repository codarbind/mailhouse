import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SimpleBadge(props) {
  const classes = useStyles();
  let mailDetails = props.mailDetails;

  return (
    <div className={classes.root}>

    
        

      <Badge badgeContent={mailDetails.countTimesCopied} color="primary">
         
          <FavoriteIcon />
        
      </Badge>
     
      <Badge badgeContent={mailDetails.uniqueCopiersMail} color="error">
        <MailIcon />
      </Badge>
    </div>
  );
}
