import React from 'react';
// Components
// import Navbar from '../components/common/Navbar';

// temp
const Navbar = () => (
  <div style={{
    width: '100%', height: '100px', background: 'red', position: 'fixed', top: 0,
  }}
  />
);

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
