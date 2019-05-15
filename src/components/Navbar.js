import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '13px',
    paddingBottom: '9px',
    background: '#fff',
  },
  logo: {
    height: '17px',
  },
};

const Navbar = ({ classes }) => {
  return (
    <div className={classes.navbar}>
      <a href="http://columbiaspectator.com">
        <img
          className={classes.logo}
          src="https://s3.amazonaws.com/spec-imagehosting/spectator-logo.png"
          alt="Columbia Spectator Logo"
        />
      </a>
    </div>
  );
};

export default injectSheet(styles)(Navbar);
