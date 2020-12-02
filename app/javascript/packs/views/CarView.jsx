import React from 'react';
// Components
import DriversTable from '../components/drivers/DriversTable';
import CarCard from '../components/cars/CarCard';
// Styles
import styles from './Car.module.scss';

const CarView = ({ isLoading, drivers, car }) => (
  <div className={styles.container}>
    <CarCard isLoading={isLoading} data={car} />
    <DriversTable data={drivers} isLoading={isLoading} />
  </div>
);

export default CarView;
