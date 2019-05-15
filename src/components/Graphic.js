import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import stickybits from 'stickybits';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const STICKY_ID = 'make-me-rad-n-sticky';
stickybits('#' + STICKY_ID);

const SCROLLAMA_OFFSET = window.innerWidth > 575 ? 0.5 : 0.8;

const imgStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transitionDuration: '.6s',
};

const styles = {
  main: {
    fontFamily: 'Helvetica',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  imageContainer: {
    transform: 'translate3d(0, 0, 0)',
    position: 'sticky',
    width: '50vw',
    height: '100vh',
    top: 0,
  },
  img: {
    ...imgStyles,
    visibility: 'visible',
    opacity: 1,
  },
  hideImg: {
    ...imgStyles,
    visibility: 'hidden',
    opacity: 0,
  },
  content: {
    width: '50vw',
  },
  step: {
    margin: '0 auto',
    maxWidth: '420px',
    padding: '0 10%',
    marginBottom: '90vh',
    '& p:last-child': {
      marginBottom: 0,
    },
  },
  text: {
    fontFamily: 'Merriweather',
    fontSize: '1.13rem',
    lineHeight: 1.8,
    margin: 0,
    marginBottom: '2rem',
  },

  '@media (max-width: 767px)': {
    main: {
      flexDirection: 'column',
    },
    imageContainer: {
      width: '100vw',
    },
    content: {
      paddingTop: 0,
      zIndex: '1',
      width: '100%',
      transform: 'translateY(-100vh)', // someone stop me
    },
    step: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '20px',
      maxWidth: '420px',
    },
    text: {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
};

class Graphic extends Component {
  constructor(props) {
    super(props);
    const { classes, slides } = props;

    this.images = [];

    let currentImg = null;
    this.steps = slides.reduce((acc, { type, value }) => {
      if (type === 'image') {
        this.images.push((currentImg = value));
      } else if (type === 'text') {
        acc.push(
          <Step data={currentImg} key={value}>
            <div className={classes.step}>
              {value.split('[NEWLINE]').map(text => (
                <p className={classes.text} key={text}>
                  {text.trim()}
                </p>
              ))}
            </div>
          </Step>,
        );
      }
      return acc;
    }, []);

    this.state = {
      image: this.images[0],
    };
  }

  onStepEnter = ({ data: image }) => {
    this.setState({ image });
  };

  render() {
    const { image } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.imageContainer} id={STICKY_ID}>
          {this.images.map(src => (
            <img
              key={src}
              className={image === src ? classes.img : classes.hideImg}
              src={src}
            />
          ))}
        </div>
        <div className={classes.content}>
          <Navbar />
          <Header />
          <Scrollama offset={SCROLLAMA_OFFSET} onStepEnter={this.onStepEnter}>
            {this.steps}
          </Scrollama>
          <Footer />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Graphic);
