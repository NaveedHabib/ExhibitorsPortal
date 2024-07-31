export default class JsLoader {
    static loadFile(url: string, callBack?: () => any) {
        const script = document.createElement("script");
        script.src = url;
        script.async = false;
        document.body.appendChild(script);
        if (callBack && typeof callBack !== "undefined") {
            callBack();
        }
    }
}