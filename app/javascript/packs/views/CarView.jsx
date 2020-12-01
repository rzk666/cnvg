import React from 'react';
// Components
import DriversTable from '../components/drivers/DriversTable';
import CarCard from '../components/cars/CarCard';
// Styles
import styles from './Car.module.scss';

const CarView = ({ data, addArticle, isLoading }) => (
  <div className={styles.container}>
    <div className={styles.card_section}>
      <CarCard />
    </div>
    <div className={styles.table_section}>
      <DriversTable />
    </div>
  </div>
);

export default CarView;
