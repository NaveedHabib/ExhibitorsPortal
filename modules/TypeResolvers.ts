const KontentDelivery = require("@kentico/kontent-delivery");
import { Aboutpage } from "@/models/aboutpage";
import { Previousprojectsection } from "@/models/previousprojectsection";
import { Previousprojectsitem } from "@/models/previousprojectsitem";
import { Servicepagerevamp } from "@/models/servicepagerevamp";





export const TypeResolver = [
  // new KontentDelivery.TypeResolver("Menu", (rawData: any) => new Menu()),

  new KontentDelivery.TypeResolver("Servicepagerevamp", (rawData: any) => new Servicepagerevamp()),
  new KontentDelivery.TypeResolver("Previousprojectsection", (rawData: any) => new Previousprojectsection()),
  new KontentDelivery.TypeResolver("Previousprojectsitem", (rawData: any) => new Previousprojectsitem()),
  new KontentDelivery.TypeResolver("Aboutpage", (rawData: any) => new Aboutpage()),






];
