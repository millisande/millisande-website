import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import {
  SettingsContextProvider,
  useSettingsContext,
} from './SettingsContext';
import '@testing-library/jest-dom';

jest.spyOn(global.console, 'error').mockImplementation(jest.fn());

const ExampleComponent = () => {
  const testContext = useSettingsContext();
  return (
    <>
      <p>{testContext.useDark ? 'Theme is dark': 'Theme is light'}</p>
      <button
        onClick={() => {
          testContext.toggleTheme();
        }}
      >
        Button
      </button>
    </>
  );
};

describe('useSettingsContext', () => {
  describe('without the SettingsProvider', () => {
  it('should use default settings', () => {
    const { getByText } = render(<ExampleComponent />);
    expect(getByText('Theme is light')).toBeDefined();
  });

  it('default toggleTheme does not change output', () => {
    render(<ExampleComponent />);
    fireEvent.click(screen.getByText('Button'));
    expect(screen.getByText('Theme is light')).toBeDefined();
  });

  describe('with SettingsContextProvider', () => {
    it('should display children wrapped by the provider', () => {
      render(
        <SettingsContextProvider>
          <p>Hello</p>
        </SettingsContextProvider>,
      );
      expect(screen.getByText('Hello')).toBeDefined();
    });
  
    it('should change isDark when toggleTheme is called', async () => {
      const { getByText } = render(
        <SettingsContextProvider>
          <ExampleComponent />
        </SettingsContextProvider>,
      );
      fireEvent.click(getByText('Button'));
      await waitFor(() => expect(getByText('Theme is dark')).toBeDefined());
    });
  });
  
});
});

