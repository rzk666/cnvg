import React from 'react';
// Animations
import { motion } from 'framer-motion';
// Components
import CarsTable from './cars/CarsTable';
import DriversTable from './drivers/DriversTable';
import { AddCircle } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
// Utils
import { useHistory } from 'react-router-dom';
// Styles
import styles from './MainList.module.scss';

const MainList = ({ entity, data }) => {
  const history = useHistory();
  const { location } = history;
  const { pathname } = location;
  return (
    <div className={styles.wrapper}>
      <div className={styles.content_contaienr}>
        <div className={styles.top_content_container}>
          <div className={styles.title}>
            <h1>{`${entity}s List`}</h1>
            <p>{`Select a ${entity} for more details`}</p>
          </div>
          <Tooltip title={`Add new ${entity}`}>
            <motion.div
              onClick={() => history.push(`${pathname}/create`)}
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.8 }}
              className={styles.add_new}
            >
              <AddCircle color="primary" />
            </motion.div>
          </Tooltip>
        </div>
        {
            entity === 'Car'
              ? <CarsTable data={data} />
              : <DriversTable data={data} />
        }
      </div>
    </div>
  );
};

export default MainList;
