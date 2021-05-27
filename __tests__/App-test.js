import React from 'react';
import {cleanup, render} from '@testing-library/react-native';

import App from '../src/App';

afterEach(cleanup);

describe('App', () => {
  it('should find the button via testId', () => {
    const testIdName = 'pressMeButton';

    const {getByTestId} = render(<App />);

    const foundButton = getByTestId(testIdName);

    expect(foundButton).toBeTruthy();
  });
});