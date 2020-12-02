import React, { useEffect, useState } from 'react';
// Custom Hooks
import { useAlerts } from '../contexts/AlertsContext';
// Misc
import { sleep } from '../utils/libs';
// Api Requests
import { fetchAllDrivers } from '../api/apicalls';

const DriversController = (props) => {
  const newAlert = useAlerts();
  // State
  const [drivers, setDrivers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // Mount effect
  useEffect(() => {
    const getDrivers = async () => {
      setLoading(true);
      try {
        const { data } = await fetchAllDrivers();
        const formattedDriversData = data.data.map((car) => {
          const { id, attributes } = car;
          return { id, ...attributes };
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

export default DriversController;
