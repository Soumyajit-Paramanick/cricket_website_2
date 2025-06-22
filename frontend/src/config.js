const BASE_URL = "http://localhost:8000";

const API = {
  PRODUCTS: `${BASE_URL}/api/products/`,
  PRODUCT_DETAIL: (id) => `${BASE_URL}/api/products/${id}/`,
  CATEGORIES: `${BASE_URL}/api/categories/`,
  BANNERS: `${BASE_URL}/api/promotional-banners/`,
  GALLERY: `${BASE_URL}/api/gallery-images/`,
};

export default API;
