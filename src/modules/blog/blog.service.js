import { BlogModel } from "../../DB/models/blog.model.js";

export const createBlog = async (input) => {
  const { title, content } = input;
  const blog = await BlogModel.create({ title: title, content: content });
  return blog;
};

export const getBlog = async () => {
    const blogs = await BlogModel.findAll()
    return blogs
}