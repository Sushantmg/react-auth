import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

// Fetch all products
export async function fetchProductsAxios() {
    return axios({ method: "get", url: API_BASE_URL + "/products" });
}

// Fetch product by ID
export async function fetchProductById(id) {
    return axios({ method: "get", url: `${API_BASE_URL}/products/${id}` });
}
