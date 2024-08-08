import Globals from "../../../modules/Globals";

export function Authentication() {
    if (typeof window !== "undefined") {
        const storageItem = localStorage.getItem(Globals.PROJECT_ID);
        if (!storageItem) {
            window.location.href = `${Globals.BASE_URL}access-denied`;
        }
    }
}