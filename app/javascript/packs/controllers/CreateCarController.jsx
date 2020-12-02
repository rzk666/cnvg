import React, { useState, useEffect } from 'react';
// Custom Hooks
import { useAlerts } from '../contexts/AlertsContext';
// Misc
import { sleep } from '../utils/libs';
// Api Requests
import { fetchAllDrivers } from '../api/apicalls';

const CreateCarController = (props) => {
  const newAlert = useAlerts();
  // State
  const [isLoading, setLoading] = useState(true);
  const [drivers, setDrivers] = useState([]);
  // Mount effect
  useEffect(() => {
    const getDrivers = async () => {
      setLoading(true);
      try {
        const { data } = await fetchAllDrivers();
        const formattedDriversData = data.map((driver) => {
          const { id, attributes } = driver;
          return { id, name: attributes.name };
        });
        // Fake loading
        await sleep(1000);
        setDrivers(formattedDriversData);
        setLoading(false);
      } catch {
        newAlert({
          severity: 'error',
          message: 'Something went wrong, please try again later',
        });
      }
    };
    getDrivers();
  }, []);

  const { View } = props;
  return (
    <View
      isLoading={isLoading}
      drivers={drivers}
      {...props}
    />
  );
};

export default CreateCarController;
