import React from 'react';
// Components
import CarsTable from '../components/cars/CarsTable';
// Styles
import styles from './Cars.module.scss';

const CarsView = ({ data }) => (
  <div className={styles.container}>
    <h2>Cars List</h2>
    <CarsTable data={data} />
  </div>
);

export default CarsView;
