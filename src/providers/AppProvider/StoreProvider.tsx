import React from 'react';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from '../../store/store';

const persistor = persistStore(store);
interface AppStoreProviderProps {
  children: React.ReactNode;
}

export function AppStoreProvider({ children }: AppStoreProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
