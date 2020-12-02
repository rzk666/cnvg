import React, { useEffect, useState } from 'react';
// Misc
import { sleep } from '../utils/libs';
// Api Requests
import { fetchAllCars } from '../api/apicalls';

const CarsController = (props) => {
  // State
  const [cars, setCars] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // Mount effect
  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      const { data } = await fetchAllCars();
      const formattedCarsData = data.data.map((car) => {
        const { id, attributes } = car;
        return { id, ...attributes };
      });
        // Fake loading
      await sleep(1000);
      setCars(formattedCarsData);
      setLoading(false);
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
