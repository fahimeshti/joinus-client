import { userCountStore } from "./store";

export default async function getUserCountApi() {
    const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/count`);
    const user = await response.json();
    userCountStore.set(user.count);
}