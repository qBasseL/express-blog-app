import { UserModel } from "../../DB/models/index.js";

export const signup = async (input) => {
  const {firstName, middleName, lastName, email, password, DOB} = input
  const user = new UserModel({firstName, middleName, lastName, email, password, DOB})
  await user.save()
  return user;
};

export const login = (data) => {};
