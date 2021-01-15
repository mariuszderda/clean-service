import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import GlobalStyle from '../assets/styles/globalStyles';
import { theme } from 'src/assets/styles/theme';

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navigation />
    {children}
  </ThemeProvider>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
