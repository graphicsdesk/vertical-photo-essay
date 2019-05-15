import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import { shorten } from '../utils';

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
  scroller: {
    width: '50vw',
    padding: '70vh 0 20vh 0',
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
    scroller: {
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
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.scroller}>
          <Scrollama offset={SCROLLAMA_OFFSET} onStepEnter={this.onStepEnter}>
            {this.steps}
          </Scrollama>
        </div>
        <div className={classes.imageContainer}>
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
