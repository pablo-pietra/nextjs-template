import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#1976d2',
        light: '#4791db',
        dark: '#115293',
    },
    secondary: {
        main: '#dc004e',
    },
    error: {
        main: '#f44336',
    },
    success: {
        main: '#4caf50',
    },
    color: {
        white: '#FFFFFF',
        black: '#000000',
        grey: '#f5f5f5',
    }
  },
});

export default theme;