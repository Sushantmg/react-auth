import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

export async function fetchUsersAxios() {

    return axios({ method: "get", url: API_BASE_URL + "/users" })



}
export async function fetchUserById(id) {
    return axios({ method: "get", url: `${API_BASE_URL}/users/${id}` });
}
