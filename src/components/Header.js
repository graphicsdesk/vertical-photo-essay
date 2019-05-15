import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  header: {
    marginBottom: '80vh',
    marginTop: '33vh',
  },
  headline: {
    textAlign: 'center',
    padding: '0 15%',
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
      color: '#000',
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
    },
    timestamp: {
      color: '#333',
      fontWeight: 400,
    },
  },
  '@media (max-width: 575px)': {
    headline: {
      fontSize: '2.1rem',
    },
  },
};

const Header = ({ classes, header }) => {
  let { headline, writer, photographer, date } = header;
  date = date.toUpperCase();

  return (
    <div className={classes.header}>
      <p className={classes.headline}>{headline}</p>
      <div className={classes.meta}>
        <p className={classes.byline}>Written by {writer}</p>
        <p className={classes.byline}>Photography by {photographer}</p>
        <div className={classes.smallButMightyLine} />
        <p className={classes.timestamp}>
          {date}
          <br />
          GRAPHICS BY JASON KAO
        </p>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Header);
