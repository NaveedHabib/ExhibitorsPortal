import Globals from "@/modules/Globals";
import React from "react";


export default function HeaderComponent() {
  return (
    <>
      <link
        href={`${Globals.BASE_URL}assets/css/main.min.css`}
        rel="stylesheet"
        media="all"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />


    </>
  );
}