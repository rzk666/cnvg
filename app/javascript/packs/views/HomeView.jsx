import React from 'react';
// Animations
import { motion } from 'framer-motion';
// Components
import Button from '@material-ui/core/Button';
// Utils
import { useHistory } from 'react-router-dom';
// Universasl
import { BLOG, CARS } from '../universal/pages';
// Icons
import { Commute, Book } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    color: 'white',
    width: 100,
    height: 165,
    opacity: 0.7,
    transition: 'opacity 0.3s ease-in',
    '&:hover': {
      opacity: 1,
    },
    '&:first-child': {
      marginRight: 30,
    },
  },
  radial_button: {
    width: 80,
    height: 80,
    borderRadius: 256,
    backgroundColor: '#202124',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  svg: {
    color: 'white',
  },
});

// ----- Help Components ----- //
const RadialButton = ({ onClick, type }) => {
  const styles = useStyles();
  return (
    <div className={styles.button_container}>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => onClick()}
          className={styles.radial_button}
        >
          {type === 'Blog' ? <Book /> : <Commute />}
        </Button>
      </motion.div>
      {`${type} app`}
    </div>
  );
};

const HomeView = () => {
  const history = useHistory();
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <RadialButton type="Blog" onClick={() => history.push({ pathname: `/${BLOG}` })} />
      <RadialButton type="Cars" onClick={() => history.push({ pathname: `/${CARS}` })} />
    </div>
  );
};

export default HomeView;
