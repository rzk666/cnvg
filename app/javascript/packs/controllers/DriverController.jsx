import React, { useState, useEffect } from 'react';
// Utils
import { useLocation } from 'react-router-dom';
// Custom Hooks
import { useAlerts } from '../contexts/AlertsContext';
// Misc
import { sleep, getIdFromPathname } from '../utils/libs';
// Api Requests
import { fetchDriverWithCars } from '../api/apicalls';

const DriverController = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const driverId = getIdFromPathname(pathname).toString();
  const newAlert = useAlerts();
  // State
  const [driver, setDriver] = useState({});
  const [cars, setCars] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // Mount effect
  useEffect(() => {
    const getDriverWithCars = async () => {
      setLoading(true);
      try {
        const { data } = await fetchDriverWithCars(driverId);
        const { included } = data;
        const formattedDriverData = { id: data.data.id, ...data.data.attributes };
        const formattedCarsData = included.map((car) => {
          const { id, attributes } = car;
          return { id, ...attributes };
        });
        // Fake loading
        await sleep(1000);
        setDriver(formattedDriverData);
        setCars(formattedCarsData);
        setLoading(false);
      } catch {
        newAlert({
          severity: 'error',
          message: 'Something went wrong, please try again later',
        });
      }
    };
    getDriverWithCars();
  }, []);

  const { View } = props;
  return (
    <View
      isLoading={isLoading}
      driver={driver}
      cars={cars}
      {...props}
    />
  );
};

export default DriverController;
