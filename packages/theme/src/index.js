// @flow strict

const activeBoxShadow = '0 0 0 0.2rem';
const active = {
  backgroundSize: '100%',
  transition: 'background 0s',
};

const breakpoints = ['414px', '576px', '768px', '992px', '1200px'];

// $FlowExpectedError[prop-missing]: this is valid js
breakpoints.mediumMobile = breakpoints[0];
// $FlowExpectedError[prop-missing]: this is valid js
breakpoints.largeMobile = breakpoints[1];
// $FlowExpectedError[prop-missing]: this is valid js
breakpoints.tablet = breakpoints[2];
// $FlowExpectedError[prop-missing]: this is valid js
breakpoints.desktop = breakpoints[3];
// $FlowExpectedError[prop-missing]: this is valid js
breakpoints.largeDesktop = breakpoints[4];

const defaultTheme = {
  fontFamily: 'Roboto, sans-serif',
  navBarColor: '#222',
  primary: '#007bff',
  secondary: '#6c757d',
  danger: '#dc3545',
  success: '#28a745',
  gray: '#e2e2e2',
  white: '#fff',
  black: '#000000',
  alert: {
    danger: {
      backgroundColor: '#f8d7da',
      border: '1px solid #f5c6cb',
      color: '#721c24',
    },
    success: {
      color: '#155724',
      backgroundColor: '#d4edda',
      border: '1px solid #c3e6cb',
    },
  },
  breakpoints,
  media: {
    mediumMobile: `@media only screen and (min-width: ${breakpoints.mediumMobile})`,
    largeMobile: `@media only screen and (min-width: ${breakpoints.largeMobile})`,
    tablet: `@media only screen and (min-width: ${breakpoints.tablet})`,
    desktop: `@media only screen and (min-width: ${breakpoints.desktop})`,
    largeDesktop: `@media only screen and (min-width: ${breakpoints.largeDesktop})`,
  },
  zIndex: {
    default: 1,
    sticky: 100,
    onTop: 900,
  },
  fontSize: {
    small: `${14 / 16}rem`,
    normal: '1rem',
    large: `${18 / 16}rem`,
  },
  space: [0, 4, 8, 12, 16, 18, 20, 22, 24],
  spacing: {
    tiny: '4px',
    small: '8px',
    normal: '12px',
    increased: '16px',
    large: '18px',
    xLarge: '20px',
    xxLarge: '22px',
    xxxLarge: '24px',
  },
  button: {
    small: {
      fontSize: '12px',
      padding: '8px 16px',
    },
    normal: {
      fontSize: '14px',
      padding: '12px 22px',
    },
    large: {
      fontSize: '16px',
      padding: '14px 26px',
    },
    primary: {
      'backgroundColor': '#007bff',
      'borderColor': '#007bff',
      'color': '#fff',
      ':focus': {
        boxShadow: `${activeBoxShadow} rgba(38,143,255,.5)`,
      },
      ':active': {
        ...active,
        backgroundColor: '#6eb9f7',
      },
    },
    secondary: {
      'backgroundColor': '#6c757d',
      'borderColor': '#6c757d',
      'color': '#fff',
      ':focus': {
        boxShadow: `${activeBoxShadow} rgba(119,124,129,.5);`,
      },
      ':active': {
        ...active,
        backgroundColor: '#88a1b6',
      },
    },
    danger: {
      'backgroundColor': '#dc3545',
      'borderColor': '#dc3545',
      'color': '#fff',
      ':focus': {
        boxShadow: `${activeBoxShadow} rgba(225,83,97,.5);`,
      },
      ':active': {
        ...active,
        backgroundColor: '#ef707c',
      },
    },
  },
};

export default defaultTheme;

/*:: export type DefaultTheme = typeof defaultTheme;
export type ThemeColors = $ReadOnly<{
  'backgroundColor': string,
  'borderColor': string,
  'color': string,
  ':focus': {
    boxShadow: string,
  },
  ':active': {
    backgroundSize: string,
    transition: string,
    backgroundColor: string,
  },
}>;
 */
