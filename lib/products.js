export async function getProducts() {
  const response = await fetch("http://localhost:1337/api/products");
  const { data } = await response.json();
  return data;
}

export async function getProduct(id) {
  const response = await fetch(`http://localhost:1337/api/products/${id}`);
  const { data } = await response.json();
  return data;
}
