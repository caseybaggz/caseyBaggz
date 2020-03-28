// @flow

import styled from 'styled-components';

const Headline = styled.h3(
  props => `
  color: ${props.theme[props.color] || props.theme.gray3};
  font-size: 32px;
`
);

export default Headline;