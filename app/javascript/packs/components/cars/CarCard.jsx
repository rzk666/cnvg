import React from 'react';
// Components
import {
  Paper,
  Button,
} from '@material-ui/core';
// Images
import CarAvatar from 'images/CarAvatar.jpg';
// Utils
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
// Styles
import CARD_STYLES from '../styles/cards/CardStyles';

// ----- Consts & Dicts ----- //
const useStyles = makeStyles(CARD_STYLES);

const CarCard = ({ isLoading, data }) => {
  const classes = useStyles();
  const history = useHistory();
  const {
    title, model, color, image,
  } = data;
  return (
    <Paper className={classnames(classes.container, { [classes.loading]: isLoading })}>
      <div className={classes.header}>
        Car Profile
      </div>
      {!isLoading
      && (
        <>
          <img
            className={classes.avatar}
            src={image || CarAvatar}
            alt="car"
          />
          <p className={classes.subtitle}>Firm</p>
          <h1 className={classes.title}>{title.toUpperCase()}</h1>
          <p className={classes.subtitle}>Model</p>
          <h1 className={classes.title}>{model ? model.toUpperCase() : 'Unknown'}</h1>
          <p className={classes.subtitle}>Color</p>
          <h1 className={classes.title}>{color ? color.toUpperCase() : 'Unknown'}</h1>
        </>
      )}
      <Button
        color="white"
        className={classes.btn}
        onClick={() => history.push('/cars')}
      >
        View all cars
      </Button>
    </Paper>
  );
};

export default CarCard;
