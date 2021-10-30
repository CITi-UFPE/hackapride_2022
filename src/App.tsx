import { ThemeProvider } from 'styled-components';
import { Awards } from './components';
import { Guests } from './components/Guests';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Awards />
    <Guests />
    <GlobalStyle />
  </ThemeProvider>
);
