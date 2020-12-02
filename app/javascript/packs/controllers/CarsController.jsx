import React, { useEffect, useState } from 'react';
// Custom Hooks
import { useAlerts } from '../contexts/AlertsContext';
// Misc
import { sleep } from '../utils/libs';
// Api Requests
import { fetchAllCars } from '../api/apicalls';

const CarsController = (props) => {
  const newAlert = useAlerts();
  // State
  const [cars, setCars] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // Mount effect
  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      try {
        const { data } = await fetchAllCars();
        const formattedCarsData = data.data.map((car) => {
          const { id, attributes } = car;
          return { id, ...attributes };
        });
        // Fake loading
        await sleep(1000);
        setCars(formattedCarsData);
        setLoading(false);
      } catch {
        newAlert({
          severity: 'error',
          message: 'Something went wrong, please try again later',
        });
      }
    };
    getCars();
  }, []);

  const { View } = props;
  return (
    <View
      {...props}
      isLoading={isLoading}
      cars={cars}
    />
  );
};

export default CarsController;
