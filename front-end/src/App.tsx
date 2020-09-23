import React from 'react';
import GlobalStyle from './styles/global';
import QueryExecute from './pages/QueryExecute';

import { ToastProvider } from './hooks/toast';

const App: React.FC = () => (
  <>
    <ToastProvider />
    <QueryExecute />
    <GlobalStyle />
  </>
);
export default App;
