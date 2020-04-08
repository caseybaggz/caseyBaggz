// @flow

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import Navicon from '../actions/Navicon';
import Disclaimer from '../layout/Disclaimer';
import Nav from '../layout/Nav';
import SocialNav from '../layout/SocialNav';
import Headline from '../typography/Headline';
import patternImage from '../../images/details-pattern.png';
import GlobalStyle from '../../utils/GlobalStyle';
import theme from '../../utils/theme';
import media from '../../utils/media';

const MainWrapper = styled.div`
  overflow-x: hidden;

  ${media.medium} {
    overflow-x: initial;
  }
`;

const Wrapper = styled(animated.div)`
  background-color: ${(props) => props.theme.white};
  min-height: 100vh;
  overflow-x: hidden;
  z-index: 1;

  ${media.medium} {
    background-color: ${(props) => props.theme.black};
  }
`;

const Content = styled.div`
  padding-left: 31px;
  padding-right: 31px;
  padding-top: 85px;
  position: relative;

  ${media.medium} {
    background-color: ${(props) => props.theme.white};
    min-height: 100vh;
    margin-left: 40%;
    padding-left: 107px;
    padding-top: 44px;
    width: 60%;

    &::before {
      background: url(${patternImage}) repeat-x center center transparent;
      background-size: contain;
      display: block;
      content: '';
      height: 18px;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
    }
  }
`;

const PageHeadline = styled(Headline)`
  color: ${props => props.theme.darkText};
  padding-bottom: 32px;

  ${media.large} {
    font-size: 64px;
  }
`;

type Props = {
  headline: string,
  children: Array<Object>
};

function DetailLayout(props: Props): React$Node {
  const [showSocial, setShowSocial] = React.useState(() => false);
  const { position, xPos } = useSpring({
    position: showSocial ? 'fixed' : 'relative',
    xPos: showSocial ? 60 : 0
  });

  function handleToggleSocial() {
    return setShowSocial(prevState => !prevState);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <MainWrapper>
        <Wrapper
          style={{
            position,
            transform: xPos.interpolate(x => `translate3d(${x}%, 0, 0)`)
          }}
        >
          <Navicon kind="dark" show={showSocial} onClick={handleToggleSocial} />

          <Content>
            <PageHeadline>{props.headline}</PageHeadline>
            <Nav />
            {props.children}
            <Disclaimer />
          </Content>
        </Wrapper>

        <SocialNav />
      </MainWrapper>
    </ThemeProvider>
  );
}

DetailLayout.defaultProps = {
  headline: ''
};

export default React.memo(DetailLayout);
