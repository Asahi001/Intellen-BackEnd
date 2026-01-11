import { createJwt } from "../functionalities/createJwt.js";
import Auth from "../models/authModel.js";
import Permissions from "../models/permissionsModel.js";

async function getPermissions(role) {
  const temp = [];
  try {
    const { permissions } = await Permissions.findOne({
      role,
    }).exec();
    const data = permissions.toObject();
    console.log(data, "ABCons......");
    for (let i in data) {
      if (permissions[i]) {
        console.log(i, ",,,,,,,,,,,,uu");
        temp.push(i);
      }
    }
  } catch (err) {
    console.error("unable to fetch the roles: ", err);
  }
  return temp;
}

export async function login(req, res) {
  console.log(req.body);
  try {
    const query = { email: req.body.email };
    const response = await Auth.findOne(query);
    const user = response.toObject();
    if (user && req.body.password == user.password) {
      const token = createJwt(req.body);
      user.token = token;
    }
    console.log(user, "user....");
    const permissions = await getPermissions(user.role);
    console.log(permissions, "permissions......");
    const data = { ...user, permissions };
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res
      .status(404)
      .json({ message: "Authentication failed please verify the credentials" });
  }
}

export async function signin(req, res) {
  // console.log(req.body);
  const data = { ...req.body, role: "viewer", status: "active" };
  try {
    await Auth.insertOne(data);
    res.status(201).json({ stausCode: 201, message: "Saved Success!" });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: "Error fetching users" });
  }
}

export async function resetPassword(req, res) {
  console.log(req.body);
  try {
    const response = await Auth.findOneAndUpdate(
      { email: req.body.email },
      { $set: { password: req.body.password } },
      { returnDocument: "after" }
    );
    // PENDING : need to implement the nodemailer to send the password changed mail
    res.status(200).json({
      message: "Updated password success!",
    });
  } catch (err) {
    res.status(400).json({
      message: "bad request unble to process request (err): " + err,
    });
  }
}
