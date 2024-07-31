export default class Globals {

    static SITE_NAME = "Exhibitor Portal";


    static BASE_URL: string =
        process.env.NODE_ENV === "production"
            ? "https://exhibitors-portal.vercel.app/"
            : "http://localhost:4000/";
}