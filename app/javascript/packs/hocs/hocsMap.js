import withLayout from './WithLayout';

// HOCs
const HOCS_MAP = {
  home: [],
  blog: [],
  cars: [withLayout],
  carscreate: [withLayout],
  driverscreate: [withLayout],
  drivers: [withLayout],
  carsanddrivers: [withLayout],
};

export default HOCS_MAP;
