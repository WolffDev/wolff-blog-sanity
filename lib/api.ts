import client from "./sanity";

const blogFields = `title, subtitle, slug`;

export const getAllBlogs = async () => {
  const response = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return response;
};
