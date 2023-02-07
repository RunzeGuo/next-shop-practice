import { fetchJson } from "./api";

const CMS_URL = process.env.CMS_URL;

export async function getProducts() {
  const { data } = await fetchJson(`${CMS_URL}/api/products?populate=*`);
  return data.map(stripProduct);
}

export async function getProduct(id) {
  const { data } = await fetchJson(`${CMS_URL}/api/products/${id}?populate=*`);
  return stripProduct(data);
}

function stripProduct(product) {
  return {
    id: product.id,
    title: product.attributes.title,
    description: product.attributes.description,
    price: "$" + product.attributes.price.toFixed(2),
    pictureUrl: CMS_URL + product.attributes.picture.data.attributes.url,
  };
}
