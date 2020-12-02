import React from 'react';
// Components
import CarsTable from '../components/cars/CarsTable';
import DriverCard from '../components/drivers/DriverCard';
// Styles
import styles from './Driver.module.scss';

const DriverView = ({ isLoading, driver, cars }) => (
  <div className={styles.container}>
    <DriverCard isLoading={isLoading} data={driver} />
    <CarsTable isLoading={isLoading} data={cars} />
  </div>
);

export default DriverView;
