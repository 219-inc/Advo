import * as dotenv from "dotenv";
dotenv.config();
import Server from "./app";

const port = (process.env.PORT || 3000) as number;

Server().listen(port, () => {
  console.log(`Server started on port ${port}`);
});
