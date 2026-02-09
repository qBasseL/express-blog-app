import { Model } from "sequelize";
import { BlogModel } from "../../DB/models/blog.model.js";
import { UserModel } from "../../DB/models/user.model.js";

export const createBlog = async (input) => {
  const { title, content, B_authorId } = input;
  const blog = await BlogModel.create({
    title: title,
    content: content,
    B_authorId,
  });
  return blog;
};

export const getBlog = async () => {
  const blogs = await BlogModel.findAll({
    include: [{ model: UserModel }],
  });
  return blogs;
};
