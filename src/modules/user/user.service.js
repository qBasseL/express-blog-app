import { BlogModel } from "../../DB/models/blog.model.js";
import { UserModel } from "../../DB/models/user.model.js";
import { Op } from "sequelize";

export const profile = async (id) => {
  // const user = await UserModel.findByPk(id)

  const user = await UserModel.findAll({
    include: [
        {model: BlogModel}
    ]
  });
  return user;
};

export const update = async (id, data) => {
  const user = await UserModel.update(data, {
    where: {
      id: id,
    },
  });

  if (!user.length) {
    throw new Error("Invlalid Account Identifier", { cause: { status: 404 } });
  }

  return user;
};

export const deleteUser = async (id) => {
  const user = await UserModel.destroy({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new Error(`No Account To Be Deleted`);
  }

  return user;
};

export const restoreUser = async (id) => {
  const user = await UserModel.restore({
    where: {
      id: id,
    },
  });

  if (user === 0) {
    throw new Error("Account is not deleted or does not exist");
  }

  return user;
};

export const getUser = async (id) => {
  const user = await UserModel.findByPk(id);
  return user;
};
