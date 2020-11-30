import React, { useContext, useState, useEffect } from 'react';
// Animations
import { AnimatePresence } from 'framer-motion';
// Components
import CustomAlert from '../components/common/CustomAlert';

const AlertsContext = React.createContext();

export const useAlerts = () => useContext(AlertsContext);

const AlertsProvider = ({ children }) => {
  const [alert, setAlert] = useState('');
  useEffect(() => {
    if (alert) {
      setTimeout(() => setAlert(''), 3000);
    }
  },
  [alert]);
  const newAlert = (alert) => {
    setAlert(alert);
  };
  return (
    <AlertsContext.Provider value={newAlert}>
      {children}
      {/* The animated presence here enables us to easly animate on unmount */}
      <AnimatePresence>
        {alert && <CustomAlert severity={alert.severity} message={alert.message} />}
      </AnimatePresence>
    </AlertsContext.Provider>
  );
};

export default AlertsProvider;
