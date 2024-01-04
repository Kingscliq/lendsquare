import { AppStoreProvider } from './StoreProvider';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <AppStoreProvider>{children}</AppStoreProvider>;
}
