import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

const metadata = {
  title: 'Plantavina',
  description: 'New Way to Live with Plants',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
