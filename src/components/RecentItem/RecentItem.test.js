import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import RecentItem from './';


describe('RecentItem component', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecentItem />, div);
  });

});
