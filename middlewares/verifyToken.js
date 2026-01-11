import { verifyJwt } from "../functionalities/verifyJwt.js";

export function verifyToken(req, res, next) {
  console.log(req.headers, "header.......");
  if (req.headers.authorization) {
    const header = req.headers.authorization;
    const token = header.split(" ")[1];
    console.log(token, "token.............");
    try {
      const tokenVerification = verifyJwt(token);
      if (tokenVerification) {
        next();
      }
    } catch (err) {
      res.status(401).json({
        Message: err,
      });
    }
  } else {
    res.status(401).json({ Message: "Please try agin after some time!" });
  }
}
