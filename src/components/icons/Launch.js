// @flow

import React from 'react';
import { ThemeConsumer } from 'styled-components';

type Props = {
  color: string
};

function LaunchIcon(props: Props) {
  return (
    <ThemeConsumer>
      {theme => (
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.4444 12.4444H1.55556V1.55556H7V0H1.55556C0.692222 0 0 0.7 0 1.55556V12.4444C0 13.3 0.692222 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V7H12.4444V12.4444ZM8.55556 0V1.55556H11.3478L3.70222 9.20111L4.79889 10.2978L12.4444 2.65222V5.44444H14V0H8.55556Z"
            fill={theme[props.color]}
          />
        </svg>
      )}
    </ThemeConsumer>
  );
}

LaunchIcon.defaultProps = {
  color: 'gray2'
};

export default React.memo<Props>(LaunchIcon);