import { Globals } from 'react-spring';

import '@testing-library/jest-dom/extend-expect';
import 'jest-plugin-context/setup';
import 'given2/setup';

Globals.assign({
  skipAnimation: true,
});
