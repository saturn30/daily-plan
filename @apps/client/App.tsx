import { ThemeProvider } from '@emotion/react';

import { AuthScreen } from './src/screens/Auth';

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <AuthScreen />
    </ThemeProvider>
  );
}
