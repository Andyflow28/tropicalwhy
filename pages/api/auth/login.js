import Jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { pool } from "../../../config/db";
import dotenv from 'dotenv-safe'

dotenv.config()

export default async function loginhandler(req, res) {
  const { UserName, password } = req.body;
  let UserNames = [];
  let passwords = [];

  const [result] = await pool.query("SELECT * FROM user;");

  if (result !== [undefined]) {
    result.map((e) => {
      UserNames.push(e.UserName);
      passwords.push(e.password);
    });

    if (UserNames.includes(UserName) && passwords.includes(password)) {
      const token = Jwt.sign(
        {
          exp: Math.floor(Date.now() / 100) + 60 * 60 * 24 * 30,
          UserName: UserName,
          password: password,
        },
        process.env.ID
      );

      const serialized = serialize("mytokenName", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialized);
      return res.json("login succesfully");
    } else {
      console.log(error);
      return res.status(401).json({ error: "invalid email or password" });
    }
  }
}
