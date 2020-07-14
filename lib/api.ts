import client from "./sanity";

const blogFields = `
    title,
    subtitle,
    'slug': slug.current
`;

export const getAllBlogs = async () => {
  const response = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return response;
};
