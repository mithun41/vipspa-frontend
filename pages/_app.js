import "swiper/css";
//import "swiper/swiper.min.css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
//import '../public/css/responsive.css';

import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }, []);
  return (
    <>
      <Component {...pageProps} />
      {/* {!loading ? (
            <Component {...pageProps} />
        ) : (
            <div className="preloader"></div>
        )} */}
    </>
  );
}

export default MyApp;
