import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function LinkToMail(props) {

  const [open, setOpen] = React.useState(true);


  const handleClose = () => {
  
      setOpen(false);  
   
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
