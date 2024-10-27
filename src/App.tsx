import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';

import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { useOverflowHidden } from './hooks/useOverflowHidden';
import { usePageTitle } from './hooks/usePageTitle';

const isDevelopment = import.meta.env.MODE === 'development';

const App = () => {
  useOverflowHidden(isDevelopment);
  usePageTitle();
  const location = useLocation();

  return (
    <div className='flex min-h-screen flex-col overflow-hidden'>
      <Header />
      <main>
        <Outlet key={location.pathname} />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default App;
