// @flow

const white: string = '#fffffe';
const black: string = '#1C1714';
const gray2: string =  '#4f4f4f';
const green3: string = '#6fcf97';

const theme: Object = {
  black,
  white,

  gray1: '#333333',
  gray2,
  gray3: '#828282',
  gray4: '#bdbdbd',
  gray5: '#e0e0e0',
  gray6: '#f2f2f2',

  green3,

  // components

  button: green3,
  shadow: '0 4px 18px rgba(0, 0, 0, 0.16)',

  // Typography

  darkText: black,
  lightText: white,
  captionText: gray2,

  // layout

  featureSidePad: '31px'
};

export default theme;