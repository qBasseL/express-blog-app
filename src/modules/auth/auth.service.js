import { UserModel } from "../../DB/models/index.js";

export const signup = async (input) => {
  const { fullName, email, password, DOB } = input;
  const checkUserExists = await UserModel.findOne({
    where: {
      email: email,
    },
  });

  if (checkUserExists) {
    throw new Error(`This Email Already Exists`, { cause: { status: 409 } });
  }

  const user = await UserModel.create(
    { fullName, email, password, DOB },
    {
      fields: [
        "firstName",
        "middleName",
        "lastName",
        "email",
        "DOB",
        "password",
      ],
    },
  );
  return user;
};

export const login = async (data) => {
  const { email, password } = data;
  const findUser = await UserModel.findOne({
    where: {
      email: email,
      password: password,
    },
  });

  if (!findUser) {
    throw new Error(`Invalid Login Credentials`, { cause: { status: 404 } });
  }

  return findUser;
};
