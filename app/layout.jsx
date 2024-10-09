import '@styles/globals.css';

export const metadata = {
  title: 'Plantavida',
  description: 'New Way to Live with Plants',
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body lang="en">
        <div className="main">
          <div className="gradient" />

          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
