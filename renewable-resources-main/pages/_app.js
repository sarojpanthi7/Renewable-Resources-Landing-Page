import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import CustomNavbar from '@/components/Navbar/Navbar';
import { SSRProvider } from 'react-bootstrap';
import CustomFooter from '@/components/Footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <CustomNavbar />
        <Component {...pageProps} />
        <CustomFooter />
      </SSRProvider>
    </>
  );
}
