import React from 'react';
import Script from 'next/script';


export default function ScriptsComponents() {
  return (
    <>
  

      <Script
        src={`/assets/js/bootstrap.bundle.min.js`}
        strategy="afterInteractive"
      />
     
    </>
  );
}
