import express from "express";
import type { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ msg: "Hello!!!" });
});

const checkID = (req: Request, res: Response, next: NextFunction) => {
  //   if (req.params.id === "abhay") {
  //     return res.status(400).json({ error: "Already username taken" });
  //   }

  console.log("My middleware");
  next();
};

// app.use(checkID);

app.get("/try/:id", (req, res) => {
  return res.status(201).json({ msg: "Contact created" });
});

app.use("/api/contacts", router);

const PORT = 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
