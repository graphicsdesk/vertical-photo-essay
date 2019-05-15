import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import stickybits from 'stickybits';
import { shorten } from '../utils';
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
    marginBottom: '2rem',
    fontFamily: 'Helvetica',
    display: 'flex',
  },
  imageContainer: {
    transform: 'translate3d(0, 0, 0)',
    position: 'sticky',
    width: '50vw',
    height: '100vh',
    top: 0,
    alignSelf: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    maxWidth: '360px',
    padding: '0 10%',
    marginBottom: '90vh',
  },
  text: {
    fontFamily: 'Merriweather',
    fontSize: '1.2rem',
    lineHeight: '1.8',
    margin: 0,
  },

  '@media (max-width: 767px)': {
    main: {
      flexDirection: 'column-reverse',
    },
    imageContainer: {
      width: '100vw',
    },
    content: {
      paddingTop: 0,
      zIndex: '1',
      width: '100%',
    },
    step: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '20px',
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

    this.steps = slides.map(({ image, text }) => {
      this.images.push({
        src: image,
        alt: shorten(text),
      });
      return (
        <Step data={image} key={image}>
          <div className={classes.step}>
            <p className={classes.text}>{text}</p>
          </div>
        </Step>
      );
    });

    this.state = {
      image: this.images[0].src,
    };
  }

  onStepEnter = ({ data: image }) => {
    this.setState({ image });
  };

  render() {
    const { image } = this.state;
    const { classes, header } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.content}>
          <Navbar />
          <Header header={header} />
          <Scrollama offset={SCROLLAMA_OFFSET} onStepEnter={this.onStepEnter}>
            {this.steps}
          </Scrollama>
          <Footer />
        </div>
        <div className={classes.imageContainer} id={STICKY_ID}>
          {this.images.map(({ src, alt }) => (
            <img
              key={src}
              className={image === src ? classes.img : classes.hideImg}
              src={src}
              alt={alt}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Graphic);
