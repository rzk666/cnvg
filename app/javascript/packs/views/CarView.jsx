import React from 'react';
// Components
import DriversTable from '../components/drivers/DriversTable';
import CarCard from '../components/cars/CarCard';
// Styles
import styles from './Car.module.scss';

const CarView = ({ data, addArticle, isLoading }) => (
  <div className={styles.container}>
    <CarCard />
    <DriversTable />
  </div>
);

export default CarView;
