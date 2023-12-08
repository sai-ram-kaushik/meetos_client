import { connect } from "@/db/dbConfig";
import bcrypt from 'bcryptjs'
import User from "@/models/usermodel";
export default async function userHandler(req, res) {
  try {
    const { body, method } = req;
    const { username, email, password, name } = body; // Make sure "name" is included

    const hashedPassword = await bcrypt.hash(password, 10);

    if (method === "POST") {
      connect();
      await User.create({ username, email, password: hashedPassword, name }); // Ensure "name" is passed here
      res.status(200).send({ message: "Request OK" });
    } else {
      res.status(500).send({ error: "Not a post request" });
    }
  } catch (error) {
    res.status(500).send({ error: "Error occurred", message: error.message });
  }
}
