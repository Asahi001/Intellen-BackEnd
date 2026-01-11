import Permissions from "../models/permissionsModel.js";

export async function defaultPermissions(req, res) {
  console.log(req.body);
  try {
    const query = await Permissions.insertOne(req.body);
    res.status(201).json({
      statusCode: 201,
      message: "Updated permission success",
      data: req.body,
    });
  } catch (err) {
    console.error("Unable to assign default role: ", err);
    res.status(404).json({
      errorMesssage: "unable tp update Data, error: " + err,
    });
  }
}
