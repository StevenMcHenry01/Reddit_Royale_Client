import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      black: '#1c181d',
      darkGrey: '#262626',
      white: '#FFFFFF',
      eggshell: '#f1f1e1'
    },
    primary: {
      main: '#ff4500'
    },
    secondary: {
      main: '#f0544f',
    },
    tertiary: {
      main: '#ffd166'
    },
    error: {
      main: '#ff1744',
    },
    switchable: {
      background: '#fff',
      menuButtonBackground: '#262626',
      menuButtonIcon: grey[400],
      mobileLinkText: grey[600]
    }
  },
  overrides: {
    // needed for chrome yellow autofill
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      black: '#1c181d',
      darkGrey: '#262626',
      white: '#FFFFFF',
      eggshell: '#f1f1e1'
    },
    primary: {
      main: '#ff4500'
    },
    secondary: {
      main: '#f0544f',
    },
    tertiary: {
      main: '#ffd166'
    },
    error: {
      main: '#ff1744',
    },
    switchable: {
      background: '#1f1f1f',
      menuButtonBackground: grey[400],
      menuButtonIcon: '#262626',
      mobileLinkText: grey[100]
    }
  },
  overrides: {
    // needed for chrome yellow autofill
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
  },
});
