import React from 'react';
// Contexts
import AlertsProvider from '../contexts/AlertsContext';

const WithAlertsHOC = (ComposedComponent) => {
  const WithAlerts = (props) => (
    <AlertsProvider>
      <ComposedComponent
        {...props}
      />
    </AlertsProvider>
  );

  return WithAlerts;
};

export default WithAlertsHOC;
