import { UserModel } from "../../DB/models/index.js";
// import { connection } from "../../DB/database.connection.js";

export const signup = async (input) => {
  const { email, password, username, dob } = input;
  const db = await connection();
  const findQuery = `select * from users where u_email = ?`;
  const [result] = await db.execute(findQuery, [email]);
  if (result?.length) {
    throw new Error("This Email Is Already Registered", {
      cause: { status: 409 },
    });
  }
  const insertQuery =
    "insert into users (u_first_name, u_middle_name, u_last_name, u_email, u_password, u_dob) values (?,?,?,?,?,?)";
  const [data] = await db.execute(insertQuery, [
    ...username.split(" "),
    email,
    password,
    dob,
  ]);
  return data;
};

export const login = (data) => {
  const { email, password } = data;
  const findUser = UserModel.find((user) => {
    return user.email === email && user.password === password;
  });
  if (!findUser) {
    throw new Error("Invalid Login Credential");
  }
  return findUser;
};
