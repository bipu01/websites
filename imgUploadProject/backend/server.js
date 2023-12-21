import express from "express";
import mysql from "mysql2";
import multer from "multer";
import cors from "cors";
// import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cors());
// app.use(bodyParser);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kamigara6996",
  database: "socialMedia",
});

const toStorage = multer.diskStorage({
  destination: function (req, data, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: toStorage,
});

app.post("/api/getImgUrl", upload.single("profilePic"), (req, res) => {
  // if (err) return res.json("Error while uploading image");
  let file = req.file.filename;
  return res.json(file);
});

// app.post("/api/getImgUrl")

app.put("/api/post", (req, res) => {
  const q = `UPDATE users SET profilePic =? WHERE id =1 `;
  let profilePicUrl = req.body.profilePic;
  db.query(q, [profilePicUrl], (err, data) => {
    if (err) return res.json("Error while posting image");
    return res.json("profilePic uploaded successfully");
  });
});

app.put("/api/update/:id", (req, res) => {
  const q = "UPDATE users SET profilePic= ? WHERE id=?";
  const a = req.params.id;
  const profile = req.body.img;
  db.query(q, [profile, a], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(2000, () => {
  console.log("server running");
});
