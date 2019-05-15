import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  header: {
    marginBottom: '80vh',
    marginTop: '31vh',
  },
  headline: {
    textAlign: 'center',
    padding: '0 12%',
    fontFamily: 'Merriweather',
    fontSize: '2.5rem',
    lineHeight: 1.5,
    color: '#333',
    margin: 0,
    marginBottom: '1.7rem',
  },
  meta: {
    margin: '0 auto',
    maxWidth: '650px',
    textAlign: 'center',
  },
  byline: {
    fontSize: '0.93rem',
    fontFamily: 'Open Sans',
    color: '#777',
    margin: 0,
    fontWeight: 300,
    marginBottom: '5px',
    '& a': {
      color: '#777',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  smallButMightyLine: {
    margin: '35px auto 25px auto',
    width: '80px',
    height: '1px',
    backgroundColor: '#ddd',
  },
  timestamp: {
    fontSize: '0.8rem',
    fontFamily: 'Open Sans',
    padding: '0 10%',
    margin: '0 auto',
    color: '#aaa',
    fontWeight: 300,
    lineHeight: 1.6,
    '& a': {
      color: '#aaa',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  '@media (max-width: 991px)': {
    title: {
      width: '92%',
    },
  },
  '@media (max-width: 767px)': {
    header: {
      padding: '42px 0',
      marginTop: '24vh',
      background: 'rgba(255, 255, 255, 0.9)',
    },
    smallButMightyLine: {
      backgroundColor: '#aaa',
    },
    byline: {
      color: '#333',
      fontWeight: 400,
      '& a': {
        color: '#333',
      },
    },
    timestamp: {
      color: '#333',
      fontSize: '.75rem',
      fontWeight: 400,
      '& a': {
        color: '#333',
      },
    },
  },
  '@media (max-width: 575px)': {
    headline: {
      fontSize: '2.1rem',
    },
  },
};

const Header = ({ classes }) => {
  return (
    <div className={classes.header}>
      <p className={classes.headline}>
        Why they came to celebrate the life of Peter Awn
      </p>
      <div className={classes.meta}>
        <p className={classes.byline}>
          Reporting by{' '}
          <a href="https://www.columbiaspectator.com/contributors/Valeria-Escobar/">
            Valeria Escobar
          </a>{' '}
          and{' '}
          <a href="https://www.columbiaspectator.com/contributors/Emma-James/">
            Emma James
          </a>
        </p>
        <p className={classes.byline}>Photography by Rya Inman</p>
        <div className={classes.smallButMightyLine} />
        <p className={classes.timestamp}>
          May 15, 2019
          <br />
          GRAPHICS BY{' '}
          <a href="https://www.columbiaspectator.com/contributors/Jason-Kao/">
            JASON KAO
          </a>
        </p>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Header);
