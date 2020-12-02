import React from 'react';
// Components
import Navbar from '../components/common/Navbar';

const WithLayoutHOC = (ComposedComponent) => {
  const WithLayout = (props) => (
    <>
      <Navbar />
      <ComposedComponent
        {...props}
      />
    </>
  );

  return WithLayout;
};

export default WithLayoutHOC;
