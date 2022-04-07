import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import axios from "axios";

const app = express();
//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", async function pruebas(req, res) {
  try {
    const { search } = req.query;
    if (search) {
      const resp = await axios.get(
        `http://api.deezer.com/search?q=${search}&limit=15`
      );
      return res.status(200).json(resp.data.data);
    }
    return res.status(400).json({
      msg: "Not found",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error",
    });
  }
});

app.set("port", 4000);

app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});

export default app;
