import { AppStoreProvider } from '@providers/AppProvider/StoreProvider';
import { Theme } from '@radix-ui/themes';
import React, { ReactNode } from 'react';

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppStoreProvider>
      <Theme>{children}</Theme>
    </AppStoreProvider>
  );
};

export default ThemeProvider;
