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
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
