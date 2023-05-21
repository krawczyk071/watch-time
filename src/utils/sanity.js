const { client } = require("../../sanity/lib/client");
// const { urlForImage } = require("../../sanity/lib/image");

export async function getProducts() {
  return client.fetch(`*[_type == "product"]`);
}
