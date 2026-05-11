import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W6W9M8QV3Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W6W9M8QV3Q');
        `}
      </Script>

      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;