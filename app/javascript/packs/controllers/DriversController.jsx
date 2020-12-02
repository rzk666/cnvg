import React, { useEffect, useState } from 'react';
// Misc
import { sleep } from '../utils/libs';
// Api Requests
import { fetchAllDrivers } from '../api/apicalls';

const DriversController = (props) => {
  // State
  const [drivers, setDrivers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // Mount effect
  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      const { data } = await fetchAllDrivers();
      const formattedDriversData = data.data.map((car) => {
        const { id, attributes } = car;
        return { id, ...attributes };
      });
        // Fake loading
      await sleep(2000);
      setDrivers(formattedDriversData);
      setLoading(false);
    };
    getCars();
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
