const { client } = require("../../sanity/lib/client");
// const { urlForImage } = require("../../sanity/lib/image");

export async function getProducts() {
  return client.fetch(`*[_type == "watches"]`);
}
export async function getById(id) {
  return client.fetch(`*[_id == "${id}"]`);
}
export async function getTopRated(count) {
  return client.fetch(
    `*[_type == "watches" && ratingCount > 4] | order(rating desc)${
      count ? `[3...${count + 3}]` : ""
    }`
  );
}
export async function getKeyword(keyword) {
  return client.fetch(`*[_type == "watches" && name match "${keyword}*"]`);
}
export async function getSpecial() {
  return client.fetch(`*[name match "ironman" || details match "graphics"]`);
}
export async function getPaginated(skip = 0, limit = 24) {
  console.log({ skip, limit });
  const last = skip + limit;
  return client.fetch(`{"items": *[_type == "watches"][${skip}...${last}],
  "total": count(*[_type == "watches"])}`);
}
