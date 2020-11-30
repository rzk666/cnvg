import { compose } from '../utils/libs';
// Global hocs
import WithMaterialDarkTheme from './WithMaterialDarkTheme';
// HOCs mapping
import HOCS_MAP from './hocsMap';

const globalHocs = compose(
  WithMaterialDarkTheme,
);

const page = (Component, currentPage) => {
  const hocsToApply = currentPage === '/' ? HOCS_MAP.home : HOCS_MAP[currentPage.toLowerCase()];
  let hocsList = ((a) => a); // Just a dummy function so we can compose
  hocsToApply.forEach((hoc) => {
    hocsList = compose(hocsList, hoc);
  });
  hocsList = compose(globalHocs, hocsList);
  return hocsList(Component);
};

export default page;
