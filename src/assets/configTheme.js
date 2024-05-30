import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2880fb'
    },
    secondary: {
      main: '#28cc8b'
    },
    tertiary: {
      main: '#4d4d4d'
    },
    fourth: {
      main: '#ff8925'
    },
    alert: {
      error: '#f44336',
      success: '#28cc8b',
      info: '#2880fb',
      warning: '#fb9800'
    }
  },
  typography: {
    htmlFontSize: 8,
    h1: {
      fontSize: 'clamp(2.9rem, 1.58rem + 2.21vw, 4.4rem)',
      fontFamily: 'Avenir_Black !important',
      color: '#000'
    },
    h2: {
      fontSize: 'clamp(2rem, 0.94rem + 1.76vw, 3.2rem)',
      fontFamily: 'Avenir_Black !important',
      margin: 0,
      textAlign: 'center'
    },
    h3: {
      fontSize: 'clamp(1.9rem, 1.10rem + 1.32vw, 2.8rem)',
      fontFamily: 'Avenir_Black !important',
      marginBottom: '29px'
    },
    h4: {
      fontSize: 'clamp(1.8rem, 1.182rem + 1.03vw, 2.5rem)',
      fontFamily: 'Avenir_Black !important'
    },
    h5: {
      fontSize: 'clamp(1.7rem, 1.256rem + 0.74vw, 2.2rem)',
      fontFamily: 'Avenir_Black !important',
      margin: 0,
      color: '#000',
      '& span': {
        fontSize: 'clamp(1.6rem, 1.072rem + 0.88vw, 2.2rem)',
      },
      '&.titleSmall': {
        fontSize: '12px',
      }
    },
    h6: {
      fontSize: '1.6rem',
      color: '#4d4d4d',
      fontFamily: 'Avenir_Regular !important',
      '&.titleSmall': {
        fontSize: '14px',
      },
      '&.titleSmallDate': {
        fontSize: '14px',
      }
    },
    p: {
      fontSize: 'clamp(1.6rem, 0.808rem + 1.32vw, 2.5rem)',
      fontFamily: 'Avenir_Black'
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960, //960
      lg: 1280, //1280
    }
  }
  // Breakpoints bootstrap v5 xs: 0, sm: 576, md: 768, lg: 992, xl:1200, xxl: 1400
});

export default theme;
