import React, { useState, useEffect } from 'react';
// Api Calls
import {
  fetchTimestamps,
  fetchAllCars,
  fetchAllDrivers,
} from '../api/apicalls';
// Misc
import { sleep, capitalize } from '../utils/libs';
// Custom Hooks
import { useAlerts } from '../contexts/AlertsContext';

const CarsAndDriversController = (props) => {
  const newAlert = useAlerts();

  // State
  const [tableData, setTableData] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [drivers, setDrivers] = useState([]);
  const [cars, setCars] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // Mount effect
  useEffect(() => {
    const getDriversAndCars = async () => {
      setLoading(true);
      try {
        const carsRes = await fetchAllCars();
        const driversRes = await fetchAllDrivers();
        const formattedCars = carsRes.data.data.map((car) => {
          const { id, attributes } = car;
          return { id, title: attributes.title };
        });
        const formattedDrivers = driversRes.data.data.map((driver) => {
          const { id, attributes } = driver;
          return { id, name: attributes.name };
        });
        setCars(formattedCars);
        setDrivers(formattedDrivers);
        setLoading(false);
      } catch (e) {
        newAlert({ severity: 'error', message: 'Something went wrong, please try again later' });
      }
    };
    getDriversAndCars();
  }, []);

  // React to selection change
  useEffect(() => {
    if (selectedValue) {
      const getTableData = async () => {
        setLoading(true);
        try {
          const { data } = await fetchTimestamps(selectedType, selectedValue);
          // Fake loading
          await sleep(1000);
          if (selectedType === 'car') {
            setTableData(data);
          } else {
            const formattedTableData = data.map((x) => {
              const { created_at, car } = x;
              return { created_at, name: `${capitalize(car.color)} ${car.title} ${car.model}` };
            });
            setTableData(formattedTableData);
          }
          setLoading(false);
        } catch (e) {
          newAlert({ severity: 'error', message: 'Something went wrong, please try again later' });
        }
      };
      getTableData();
    }
  }, [selectedValue, selectedType]);

  // Help Functions //
  const handleSelection = (id, type) => {
    setSelectedType(type);
    setSelectedValue(id);
  };

  const { View } = props;
  return (
    <View
      cars={cars}
      drivers={drivers}
      isLoading={isLoading}
      tableData={tableData}
      selectedType={selectedType}
      selectedValue={selectedValue}
      handleSelection={handleSelection}
      {...props}
    />
  );
};

export default CarsAndDriversController;
