// Create a theme instance.

import { createMuiTheme } from '@material-ui/core/styles/index';
import { red } from '@material-ui/core/colors/index';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
export default theme;