import tinycolor from 'tinycolor2';

const primary = '#000f12a';
const secondary = '#000f12a';
const warning = '#FFC260';
const success = '#3CD4A0';
const info = '#9013FE';

const lightenRate = 7.5;
const darkenRate = 15;

const defaultTheme = {
  palette: {
    main: primary,
    light: tinycolor(primary).lighten(lightenRate).toHexString(),
    dark: tinycolor(primary).darken(darkenRate).toHexString(),
  },
  secondary: {
    main: secondary,
    light: tinycolor(secondary).lighten(lightenRate).toHexString(),
    dark: tinycolor(secondary).darken(darkenRate).toHexString(),
    contrastText: '#FFFFFF',
  },
  warning: {
    main: warning,
    light: tinycolor(warning).lighten(lightenRate).toHexString(),
    dark: tinycolor(warning).darken(darkenRate).toHexString(),
  },
  success: {
    main: success,
    light: tinycolor(success).lighten(lightenRate).toHexString(),
    dark: tinycolor(success).darken(darkenRate).toHexString(),
  },
  info: {
    main: info,
    light: tinycolor(info).lighten(lightenRate).toHexString(),
    dark: tinycolor(info).darken(darkenRate).toHexString(),
  },
  text: {
    primary: '#4CBB17',
    secondary: '#4CBB17',
    hint: '#B9B9B9',
  },
  background: {
    default: '#F6F7FF',
    light: '#F3F5FF',
  },
};

export default defaultTheme;
