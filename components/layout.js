//arrow function called Layout
import Header from './header';
import Footer from './footer';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
