const { client } = require("../../sanity/lib/client");
// const { urlForImage } = require("../../sanity/lib/image");

export async function getProducts() {
  return client.fetch(`*[_type == "watches"]`);
}
export async function getById(id) {
  return client.fetch(`*[_id == "${id}"]`);
}
