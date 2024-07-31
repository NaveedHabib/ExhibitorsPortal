
const KontentDelivery = require("@kentico/kontent-delivery");

export default class Globals {
    static PROJECT_ID: string = "e3428e80-3966-0085-ee98-3bee1120f101";

    static SECURE_API_KEY: string =
        "ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjcxYjA2OTY0ODE5NTRmNjI4YjA5ZGQ2NzZjNmYwMWJiIiwNCiAgImlhdCI6ICIxNjc2NTI3MTUxIiwNCiAgImV4cCI6ICIxNzA4MDYzMTQwIiwNCiAgInZlciI6ICIxLjAuMCIsDQogICJwcm9qZWN0X2lkIjogImUzNDI4ZTgwMzk2NjAwODVlZTk4M2JlZTExMjBmMTAxIiwNCiAgImF1ZCI6ICJkZWxpdmVyLmtlbnRpY29jbG91ZC5jb20iDQp9.pwiythDp7iXJLTbOwC868UnS0j8wj1DwWyYUViFBLXI";

    static KontentClient: any = new KontentDelivery.DeliveryClient({
        projectId: Globals.PROJECT_ID,
        globalQueryConfig: {
            useSecuredMode: true, // Queries the Delivery API using secure access.
        },
        secureApiKey: Globals.SECURE_API_KEY,
        // typeResolvers: TypeResolver,
    });

    static SITE_NAME = "Creation House";


    static BASE_URL: string =
        process.env.NODE_ENV === "production"
            ? "https://creation-house.ae/"
            : "http://localhost:4000/";
}