import { compose } from '../utils/libs';
// HOCs mapping
import HOCS_MAP from './hocsMap';

const globalHocs = compose(
  // We would've add HOCs to be applied to all pages here
);

const page = (Component, currentPage) => {
  const hocsToApply = HOCS_MAP[currentPage];
  let hocsList = ((a) => a); // Just a dummy function so we can compose
  hocsToApply.forEach((hoc) => {
    hocsList = compose(hocsList, hoc);
  });
  hocsList = compose(globalHocs, hocsList);
  return hocsList(Component);
};

export default page;
