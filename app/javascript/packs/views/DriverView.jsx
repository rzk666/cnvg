import React from 'react';
// Components
import CarsTable from '../components/cars/CarsTable';
import DriverCard from '../components/drivers/DriverCard';
// Styles
import styles from './Car.module.scss';

const DriverView = ({ data, addArticle, isLoading }) => (
  <div className={styles.container}>
    <div className={styles.card_section}>
      <DriverCard />
    </div>
    <div className={styles.table_section}>
      <CarsTable />
    </div>
  </div>
);

export default DriverView;
