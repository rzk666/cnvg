import React from 'react';
// Components
import JoinedTable from '../components/JoinedTable';
import {
  Select,
  MenuItem,
  InputLabel,
  Input,
  FormControl,
} from '@material-ui/core';
// Styles
import styles from './CarsAndDrivers.module.scss';

// ----- Consts & Dicts ----- //
const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const CarsAndDriversView = ({
  isLoading,
  tableData,
  selectedValue,
  selectedType,
  handleSelection,
  drivers,
  cars,
}) => (
  <div className={styles.container}>
    <div className={styles.content_container}>
      <h1>Cars And Drivers</h1>
      <div className={styles.selects_container}>
        <FormControl>
          <InputLabel>Driver</InputLabel>
          <Select
            className={styles.select}
            input={<Input />}
            value={(selectedType === 'driver' && !!selectedValue) ? selectedValue : ''}
            placeholder="Select driver"
            onChange={(e) => handleSelection(e.target.value, 'driver')}
            MenuProps={MenuProps}
          >
            {drivers.map((driver) => {
              const { id, name } = driver;
              return <MenuItem value={id}>{name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Car</InputLabel>
          <Select
            className={styles.select}
            input={<Input />}
            label="Car"
            value={(selectedType === 'car' && !!selectedValue) ? selectedValue : ''}
            placeholder="Select car"
            onChange={(e) => handleSelection(e.target.value, 'car')}
            MenuProps={MenuProps}
          >
            {cars.map((car) => {
              const { id, title } = car;
              return <MenuItem value={id}>{title}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <JoinedTable id={selectedValue} isLoading={isLoading} data={tableData} />
    </div>
  </div>
);

export default CarsAndDriversView;
