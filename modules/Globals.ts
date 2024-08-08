export default class Globals {

  static PROJECT_ID: string = "824964h9-4e2b-0189-b4g7-20f22d30f5ae";

  static SITE_NAME = "Exhibitor Portal";

  static API_URL: string =
    process.env.NODE_ENV === "production"
      ? "https://payment.aimcongress.com/api/"
      : "https://localhost:44355/api/";

  static BASE_URL: string =
    process.env.NODE_ENV === "production"
      ? "https://exhibitors-portal.vercel.app/"
      : "http://localhost:4000/";

  static Server_URL: string =
    process.env.NODE_ENV === "production"
      ? "https://payment.aimcongress.com/"
      : "https://localhost:44355/";
}