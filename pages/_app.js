import Navbaar from '../components/layout/Navbaar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbaar/>
      <Component {...pageProps} />
    </>
  );  
}

export default MyApp
