// pages/index.js
import Head from "next/head";


import Link from "next/link";


import { motion } from "framer-motion"

import BannerComponent from "@/components/BannerComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { loggedModel } from "@/sysmodel/loginModel";
import Helper from "@/modules/Helper";
import Globals from "@/modules/Globals";
import eventModel from "@/sysmodel/eventModel";
import { StandSpaceCategoryModel } from "@/sysmodel/StandSpaceModel";


export default function Home() {

  const loggedData: loggedModel | null = Helper.getLoggedData();

  const [EventData, SetEventData] = useState<eventModel>();

  const [categories, setCategories] = useState<Array<StandSpaceCategoryModel>>([]);

  useEffect(() => {
    if (loggedData) {
      axios.get(`${Globals.API_URL}Exhibitor/GetEvent/${loggedData.eventid}`).then((r: any) => {
        const dataModel: eventModel = r.data;
        SetEventData(dataModel);
      });

      const fetchCategories = async () => {
        const data = await Helper.getCategories(loggedData.type=="exhibitor"?loggedData.id.toString():loggedData.exhibitorId);
        setCategories(data);
      };

      fetchCategories();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>{EventData?.Name} | Exhibitor Portal</title>
        <meta name="description" content="" />

      </Head>

      {
        EventData ? (
          <BannerComponent EventData={EventData} />
        ) : ""
      }

      <div className="products-service-wrapper ">
        <div className="container">
          <div className="row">
            <div className="col-12 heading-wrapper">
              <h1 className="text-center "><span className="section-heading">Our products & services</span></h1>

            </div>

          </div>

          <div className="row service-wrapper">
            {categories.map((item: StandSpaceCategoryModel, index: number) => {
              return (
                <div className="col-lg-4 mb-3" key={`service${index}`}>
                  <Link href={`/shop/${item.StandSpaceCategoryID}`}>
                    <div className="service-card">

                      <img style={{height:"270px"}} src={item.Image?item.Image:`/assets/imgs/default.png`} alt={item.Name} className="product-img" />

                      <div className="footer">
                        <p>{item.Name}</p>
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
