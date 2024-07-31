// pages/index.js
import Head from "next/head";
import Image from "next/image";

import dynamic from "next/dynamic";


import Globals from "@/modules/Globals";
import { useEffect, useState } from "react";

import Link from "next/link";

import SpinnerComponent from "@/components/UI/SpinnerComponent";


import { motion } from "framer-motion"
import { fadeInAnimationVariants } from "@/utils/customAnimation";
import BannerComponent from "@/components/BannerComponent";



export default function Home() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Exhibitor Portal</title>
        <meta name="description" content="" />

      </Head>

      <BannerComponent />

      <div className="products-service-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-wrapper">
              <h1 className="text-center "><span className="section-heading">Our products & services</span></h1>

            </div>

          </div>

          <div className="row service-wrapper">
            <div className="col-lg-4 mb-3">
              <Link href="/shop">
                <div className="service-card">

                  <img src="/assets/imgs/catering.png" alt="" className="product-img" />

                  <div className="footer">
                    <p>Catering</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="service-card">

                <img src="/assets/imgs/rigging.png" alt="" className="product-img" />

                <div className="footer">
                  <p>Rigging</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="service-card">

                <img src="/assets/imgs/IT&Telecom.png" alt="" className="product-img" />
                <div className="footer">
                  <p>IT & Telecom</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="service-card">

                <img src="/assets/imgs/cleaning.png" alt="" className="product-img" />
                <div className="footer">
                  <p>Cleaning</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="service-card">

                <img src="/assets/imgs/cctv rental.png" alt="" className="product-img" />
                <div className="footer">
                  <p>CCTV Rental</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="service-card">

                <img src="/assets/imgs/electricals.png" alt="" className="product-img" />
                <div className="footer">
                  <p>Electricals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </motion.div>
  );
}
