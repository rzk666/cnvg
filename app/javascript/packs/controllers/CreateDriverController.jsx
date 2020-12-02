import React, { useEffect, useState } from 'react';
// Custom Hooks
import { useAlerts } from '../contexts/AlertsContext';
// Misc
import { sleep, capitalize } from '../utils/libs';
// Api Requests
import { fetchAllCars } from '../api/apicalls';

const CreateDriverController = (props) => {
  const newAlert = useAlerts();
  // State
  const [isLoading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  // Mount effect
  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      try {
        const { data } = await fetchAllCars();
        const formattedCarsData = data.data.map((car) => {
          const { id, attributes } = car;
          const { color, title, model } = attributes;
          return { id, name: `${capitalize(color)} ${title} ${model}` };
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
      cars={cars}
      isLoading={isLoading}
      {...props}
    />
  );
};

export default CreateDriverController;
