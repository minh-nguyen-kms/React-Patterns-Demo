import { globalEventBus } from "./globalEventBus";

export async function fetchData() {
    globalEventBus.dispatchEvent('fetchData', { loading: true });
    try {
        const data = fetch('API_PATH');
        globalEventBus.dispatchEvent('fetchData', { success: true});
        return data;
    } catch(ex) {
        globalEventBus.dispatchEvent('fetchData', { error: true });
    }
}