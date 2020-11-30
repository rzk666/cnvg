import { compose } from '../utils/libs';
// Global hocs
import WithMaterialDarkTheme from './WithMaterialDarkTheme';
import WithAlerts from './WithAlerts';
// HOCs mapping
import HOCS_MAP from './hocsMap';

const globalHocs = compose(
  WithAlerts,
  WithMaterialDarkTheme,
);

const page = (Component, currentPage) => {
  const hocsToApply = currentPage === '/' ? HOCS_MAP.home : HOCS_MAP[currentPage.toLowerCase()];
  let hocsList = ((a) => a); // Just a dummy function so we can compose
  hocsToApply.forEach((hoc) => {
    hocsList = compose(hocsList, hoc);
  });
  hocsList = compose(hocsList, globalHocs);
  return hocsList(Component);
};

export default page;
