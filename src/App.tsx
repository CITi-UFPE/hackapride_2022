import { ThemeProvider } from 'styled-components';
import {
  Awards,
  Navbar,
  Guests,
  HomePage,
  Contact,
  Footer,
  PartnersSection,
} from './components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <Awards />
    <GlobalStyle />
    <PartnersSection />
  </ThemeProvider>
);
