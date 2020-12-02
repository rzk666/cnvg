import React, { useState, useEffect } from 'react';
// Utils
import { useLocation } from 'react-router-dom';
// Custom Hooks
import { useAlerts } from '../contexts/AlertsContext';
// Misc
import { sleep, getIdFromPathname } from '../utils/libs';
// Api Requests
import { fetchCarWithDrivers } from '../api/apicalls';

const CarController = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const carId = getIdFromPathname(pathname);
  const newAlert = useAlerts();
  // State
  const [car, setCar] = useState({});
  const [drivers, setDrivers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // Mount effect
  useEffect(() => {
    const getCarWithDrivers = async () => {
      setLoading(true);
      try {
        const { data } = await fetchCarWithDrivers(carId);
        const { included } = data;
        const formattedCarData = { id: data.data.id, ...data.data.attributes };
        const formattedDriversData = included.map((driver) => {
          const { id, attributes } = driver;
          return { id, ...attributes };
        });
        // Fake loading
        await sleep(1000);
        setCar(formattedCarData);
        setDrivers(formattedDriversData);
        setLoading(false);
      } catch {
        newAlert({
          severity: 'error',
          message: 'Something went wrong, please try again later',
        });
      }
    };
    getCarWithDrivers();
  }, []);

  const { View } = props;
  return (
    <View
      isLoading={isLoading}
      drivers={drivers}
      car={car}
      {...props}
    />
  );
};

export default CarController;
