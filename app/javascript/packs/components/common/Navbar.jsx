import React from 'react';
// Routing
import { Link, useHistory } from 'react-router-dom';
// Universal
import { CARS, DRIVERS, HOME, CARS_AND_DRIVERS } from '../../universal/pages';
// Components
import {
  AppBar,
} from '@material-ui/core';
// Icons
import { Home } from '@material-ui/icons';
// Animations
import { motion } from 'framer-motion';
// Styles
import styles from './Navbar.module.scss';

// ----- Help Components ----- //
const NavbarLink = ({ to, isActive, children }) => (
  <motion.div
    className={styles.nav_link}
    whileHover={{ opacity: 1 }}
    initial={{ opacity: isActive ? 1 : 0.5 }}
  >
    <Link to={to}>{children}</Link>
  </motion.div>
);

// ----- Main Component ----- //
const Navbar = () => {
  const history = useHistory();
  const { location } = history;
  const { pathname } = location;
  return (
    <AppBar className={styles.navbar} position="static">
      <div className={styles.navbar_content}>
        <NavbarLink
          to={HOME}
        >
          <Home />
        </NavbarLink>
        <NavbarLink
          to={`/${CARS}`}
          isActive={pathname.includes(CARS)}
        >
          Cars
        </NavbarLink>
        <NavbarLink
          to={`/${DRIVERS}`}
          isActive={pathname.includes(DRIVERS)}
        >
          Drivers
        </NavbarLink>
        <NavbarLink
          to={`/${DRIVERS}`}
          isActive={pathname.includes(CARS_AND_DRIVERS)}
        >
          Drivers & Cars
        </NavbarLink>
      </div>
    </AppBar>
  );
};

export default Navbar;
