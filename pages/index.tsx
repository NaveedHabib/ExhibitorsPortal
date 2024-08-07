// pages/index.js
import Head from "next/head";


import Link from "next/link";


import { motion } from "framer-motion"

import BannerComponent from "@/components/BannerComponent";
import { Categories } from "@/contants/data";



export default function Home() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>AIM | Exhibitor Portal</title>
        <meta name="description" content="" />

      </Head>

      <BannerComponent />

      <div className="products-service-wrapper ">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-wrapper">
              <h1 className="text-center "><span className="section-heading">Our products & services</span></h1>

            </div>

          </div>

          <div className="row service-wrapper">
            {Categories.map((item: any, index: number) => {
              return (
                <div className="col-lg-4 mb-3" key={`service${index}`}>
                  <Link href="/shop">
                    <div className="service-card">

                      <img src={item.image} alt="" className="product-img" />

                      <div className="footer">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>




    </motion.div>
  );
}
