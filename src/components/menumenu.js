import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

export default function Menumenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const useStyles = makeStyles(()=>({
    menuoptions:{
      color:'blue',
    }

  }));

  let classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" style={{color:'white'}} onClick={handleClick}>
        <MenuIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link className={classes.menuoptions} Component={Link} to='/'>HOME</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className={classes.menuoptions} Component={Link} to='/create'>CREATE</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link  className={classes.menuoptions}  Component={Link} to='/signup'>SIGNUP</Link></MenuItem>
      </Menu>
    </div>
  );
}
